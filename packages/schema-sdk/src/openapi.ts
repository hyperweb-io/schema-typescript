import generate from '@babel/generator';
import template from '@babel/template';
import * as t from '@babel/types';
import { toCamelCase, toPascalCase } from '@interweb-utils/casing';
import { generateTypeScriptTypes } from 'schema-typescript';
import { getTypeNameSafe, shouldInclude } from 'schema-typescript';

import {
  OpenAPIPathItem,
  OpenAPISpec,
  Operation,
  Parameter,
  Response,
} from './openapi.types';
import { OpenAPIOptions } from './types';
import { createPathTemplateLiteral, applyJsonPatch } from './utils';

/**
includes: {
  requests: ['patch', 'head', 'options', 'get', 'delete'],
  tags: ['patch', 'head', 'options', 'get', 'delete']
} 
*/
const METHOD_TYPES = [
  'get',
  'post',
  'put',
  'delete',
  'options',
  'head',
  'patch',
];
type MethodType =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'options'
  | 'head'
  | 'patch';

interface ParsedRoute {
  path: string;
  params: string[];
}

function parseRoute(route: string): ParsedRoute {
  // eslint-disable-next-line
  const paramRegex = /\{([^\}]+)\}/g; // Regular expression to find {param}
  let match: RegExpExecArray | null;
  const params: string[] = [];

  // Extract parameters using regex
  while ((match = paramRegex.exec(route)) !== null) {
    params.push(match[1]); // Capture the parameter name, excluding the braces
  }

  // Return the original path and the extracted parameters
  return {
    path: route,
    params,
  };
}

const shouldIncludeOperation = (
  options: OpenAPIOptions,
  pathItem: OpenAPIPathItem,
  path: string,
  method: MethodType
) => {
  const operation: Operation | undefined = pathItem[method];

  if (!operation) return false;

  const shouldIncludeByPath = shouldInclude(path, {
    include: options.paths?.include ?? [],
    exclude: options.paths?.exclude ?? [],
  });

  if (!shouldIncludeByPath) return false;

  const shouldIncludeByTag = (operation.tags || []).some((tag) =>
    shouldInclude(tag, {
      include: options.paths?.includeTags ?? [],
      exclude: options.paths?.excludeTags ?? [],
    })
  );

  if (!shouldIncludeByTag) return false;

  const shouldIncludeByRequest = shouldInclude(method, {
    include: options.paths?.includeRequests ?? [],
    exclude: options.paths?.excludeRequests ?? [],
  });

  if (!shouldIncludeByRequest) return false;
  return true;
};

export const getApiTypeNameSafe = (
  options: OpenAPIOptions,
  str: string
): string => {
  return getTypeNameSafe(options.namingStrategy, str);
};

// GVK-based naming strategy for conflict resolution
interface GVKInfo {
  group: string;
  version: string;
  kind: string;
}

export const generateTypeNameFromGVK = (
  gvk: GVKInfo,
  options: OpenAPIOptions
): string => {
  const { group, version, kind } = gvk;
  
  // Handle core group (empty group) and normalize group names
  const groupName = group === '' ? 'Core' : toPascalCase(group.replace(/\./g, ''));
  const versionName = toPascalCase(version);
  const kindName = toPascalCase(kind);
  
  const fullName = `${groupName}${versionName}${kindName}`;
  return getApiTypeNameSafe(options, fullName);
};

// Generate qualified type names for Option 2: Keep core simple, qualify non-core
export const generateQualifiedTypeName = (
  gvk: GVKInfo,
  options: OpenAPIOptions,
  definitionName?: string
): string => {
  const { group, version, kind } = gvk;
  
  // Check if this is a List type based on the definition name
  const isListType = definitionName && definitionName.split('.').pop()?.endsWith('List');
  const kindName = isListType ? definitionName.split('.').pop()! : kind;
  
  // Core resources (empty group or "core") keep simple names
  if (!group || group === '' || group === 'core') {
    return getApiTypeNameSafe(options, kindName);
  }
  
  // Non-core resources get qualified names: {Group}{Version}{Kind}
  // e.g., "serving.knative.dev" + "v1" + "Service" -> "ServingKnativeDevV1Service"
  const groupParts = group.split('.').map(part => toPascalCase(part)).join('');
  const versionPart = toPascalCase(version);
  const qualifiedName = `${groupParts}${versionPart}${toPascalCase(kindName)}`;
  
  return getApiTypeNameSafe(options, qualifiedName);
};

const pascalFromDefinitionName = (defName: string): string => {
  return defName
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((segment) => toPascalCase(segment))
    .join('');
};

export const getOperationReturnType = (
  options: OpenAPIOptions,
  operation: Operation,
  method: string,
  interfaceRenameMap?: { [key: string]: string }
) => {
  if (operation.responses) {
    if (operation.responses['200']) {
      const prop = operation.responses['200'];
      return getResponseType(options, prop, interfaceRenameMap);
    }
  }
  if (method === 'get') return t.tsAnyKeyword();
  return t.tsVoidKeyword();
};

export const getResponseType = (
  options: OpenAPIOptions,
  prop: Response,
  interfaceRenameMap?: { [key: string]: string }
) => {
  if (prop.schema.type) {
    switch (prop.schema.type) {
    case 'string':
      return t.tsStringKeyword();
    case 'number':
    case 'integer':
      return t.tsNumberKeyword();
    case 'boolean':
      return t.tsBooleanKeyword();
    case 'null':
      return t.tsNullKeyword();
    case 'array':
      throw new Error('Array items specification is missing');
    case 'object':
      throw new Error('Array items specification is missing');
    default:
      return t.tsAnyKeyword();
    }
  }

  // resolve $ref
  if (prop.schema) {
    if (!prop.schema.$ref) {
      throw new Error('no property set on open api parameter schema!');
    }
    const ref = prop.schema.$ref.split('/');
    const definitionName = ref.pop();
    const resolvedName = interfaceRenameMap?.[definitionName!]
      ?? getApiTypeNameSafe(options, definitionName);
    return t.tsTypeReference(t.identifier(resolvedName));
  }
  return t.tsAnyKeyword();
};

export const getParameterType = (
  options: OpenAPIOptions,
  prop: Parameter,
  interfaceRenameMap?: { [key: string]: string }
) => {
  if (prop.type) {
    switch (prop.type) {
    case 'string':
      return t.tsStringKeyword();
    case 'number':
    case 'integer':
      return t.tsNumberKeyword();
    case 'boolean':
      return t.tsBooleanKeyword();
    case 'null':
      return t.tsNullKeyword();
    case 'array':
      throw new Error('Array items specification is missing');
    case 'object':
      throw new Error('Array items specification is missing');
    default:
      return t.tsAnyKeyword();
    }
  }

  // resolve $ref
  if (prop.schema) {
    if (!prop.schema.$ref) {
      throw new Error('no property set on open api parameter schema!');
    }
    const ref = prop.schema.$ref.split('/');
    const definitionName = ref.pop();
    const resolvedName = interfaceRenameMap?.[definitionName!]
      ?? getApiTypeNameSafe(options, definitionName);
    return t.tsTypeReference(t.identifier(resolvedName));
  }
  return t.tsAnyKeyword();
};

interface ParameterInterfaces {
  query: Parameter[];
  header: Parameter[];
  path: Parameter[];
  formData: Parameter[];
  body: Parameter[];
}

interface OpParameterInterfaces {
  pathLevel: ParameterInterfaces;
  get: ParameterInterfaces;
  post: ParameterInterfaces;
  put: ParameterInterfaces;
  delete: ParameterInterfaces;
  options: ParameterInterfaces;
  head: ParameterInterfaces;
  patch: ParameterInterfaces;
}

const initParams = (): ParameterInterfaces => {
  return {
    query: [],
    header: [],
    path: [],
    formData: [],
    body: [],
  };
};

// Resolve a parameter $ref against the spec's global parameters collection
function resolveParameterRef(
  schema: OpenAPISpec,
  param: any
): Parameter {
  if (param && typeof param === 'object' && (param as any).$ref) {
    const ref: string = (param as any).$ref;
    if (ref.includes('/parameters/')) {
      const parts = ref.split('/');
      const name = parts[parts.length - 1];
      const resolved = schema.parameters?.[name];
      if (resolved) return resolved as Parameter;
    }
  }
  return param as Parameter;
}

export function generateOpenApiParams(
  options: OpenAPIOptions,
  schema: OpenAPISpec,
  path: string,
  pathItem: OpenAPIPathItem,
  interfaceRenameMap?: { [key: string]: string }
): t.TSInterfaceDeclaration[] {
  const opParams: OpParameterInterfaces = getOpenApiParams(
    options,
    schema,
    path,
    pathItem
  );
  const interfaces: t.TSInterfaceDeclaration[] = [];
  ['get', 'post', 'put', 'delete', 'options', 'head', 'patch'].forEach(
    (method) => {
      if (Object.prototype.hasOwnProperty.call(pathItem, method)) {
        const operation: Operation | undefined = pathItem[method as keyof OpenAPIPathItem] as Operation | undefined;
        if (!operation || !shouldIncludeOperation(options, pathItem, path, method as any))
          return;

        const methodType = method as MethodType;

        const opParamMethod: ParameterInterfaces = opParams[methodType];

        const props: t.TSPropertySignature[] = [];

        Object.keys(opParamMethod).forEach((key) => {
          const params: Parameter[] = opParamMethod[key as keyof ParameterInterfaces];
          const paramType = key as 'query' | 'body' | 'formData' | 'header' | 'path';

          // only include body sometimes
          if (
            ['body', 'formData'].includes(paramType) &&
            !['post', 'put', 'patch'].includes(methodType)
          )
            return;

          const inner: t.TSPropertySignature[] = [];
          params.forEach((param) => {
            const p = t.tsPropertySignature(
              t.identifier(param.name),
              t.tsTypeAnnotation(getParameterType(options, param, interfaceRenameMap))
            );
            if (!param.required) {
              p.optional = true;
            }
            inner.push(p);
          });

          if (!options.mergedParams) {
            if (paramType === 'body') {
              props.push(...inner);
            } else {
              const p = t.tsPropertySignature(
                t.identifier(paramType),
                t.tsTypeAnnotation(t.tsTypeLiteral([...inner]))
              );
              if (inner.length) {
                props.push(p);
              }
            }
          } else {
            props.push(...inner);
          }
        });

        const typeName =
          getOperationTypeName(options, operation, method, path) + 'Request';
        const paramsInterface = t.tsInterfaceDeclaration(
          t.identifier(typeName),
          null,
          [],
          t.tsInterfaceBody(props)
        );
        interfaces.push(paramsInterface);
      }
    }
  );

  return interfaces;
}

export function getOpenApiParams(
  options: OpenAPIOptions,
  schema: OpenAPISpec,
  path: string,
  pathItem: OpenAPIPathItem
): OpParameterInterfaces {
  const opParams: OpParameterInterfaces = {
    pathLevel: initParams(),
    get: initParams(),
    post: initParams(),
    put: initParams(),
    delete: initParams(),
    options: initParams(),
    head: initParams(),
    patch: initParams(),
  };

  const pathInfo = parseRoute(path);

  // BEGIN SANITIZE PARAMS
  pathItem.parameters = pathItem.parameters ?? [];
  const resolvedPathParams = pathItem.parameters.map((p) =>
    resolveParameterRef(schema, p as any)
  );
  const pathParms = resolvedPathParams.filter((param) => param.in === 'path') ?? [];
  if (pathParms.length !== pathInfo.params.length) {
    const parameters =
      resolvedPathParams.filter((param) => param.in !== 'path') ?? [];
    pathInfo.params.forEach((name) => {
      const found = pathParms.find((param) => param.name === name);
      parameters.push(
        found
          ? found
          : {
            name,
            type: 'string',
            required: true,
            in: 'path',
          }
      );
    });
    pathItem.parameters = parameters;
  }
  // END SANITIZE PARAMS

  // load Path-Level params
  pathItem.parameters.forEach((param) => {
    const resolved = resolveParameterRef(schema, param as any);
    opParams.pathLevel[resolved.in].push(resolved);
  });

  ['get', 'post', 'put', 'delete', 'options', 'head', 'patch'].forEach(
    (method) => {
      if (Object.prototype.hasOwnProperty.call(pathItem, method)) {
        const operation: Operation | undefined = pathItem[method as keyof OpenAPIPathItem] as Operation | undefined;
        if (!operation || !shouldIncludeOperation(options, pathItem, path, method as any))
          return;

        const opParamMethod: ParameterInterfaces = opParams[method as keyof OpParameterInterfaces];

        // push Path-Level params into op
        opParamMethod.path.push(...opParams.pathLevel.path);
        opParamMethod.query.push(...opParams.pathLevel.query);
        opParamMethod.header.push(...opParams.pathLevel.header);

        // get the params
        if (operation.parameters) {
          // Categorize parameters by 'in' field
          operation.parameters.forEach((param) => {
            const resolved = resolveParameterRef(schema, param as any);
            opParamMethod[resolved.in].push(resolved);
          });
        }
      }
    }
  );

  return opParams;
}
export function generateOpenApiTypes(
  options: OpenAPIOptions,
  schema: OpenAPISpec,
  interfaceRenameMap?: { [key: string]: string }
): t.ExportNamedDeclaration[] {
  const interfaces: t.TSInterfaceDeclaration[] = [];
  // Iterate through each path and each method to generate interfaces
  Object.entries(schema.paths).forEach(([path, pathItem]) => {
    interfaces.push(
      ...generateOpenApiParams(options, schema, path, pathItem, interfaceRenameMap)
    );
  });
  return interfaces.map((i) => t.exportNamedDeclaration(i));
}

// ---------------------------------------------
// Helper functions for GVK-based interface naming
// ---------------------------------------------

// Generate utility functions for ResourceTypeMap lookup
function generateResourceTypeMapUtilities(entries: { key: string; typeName: string }[]): t.Statement[] {
  const statements: t.Statement[] = [];

  const gvkInterface = t.tsInterfaceDeclaration(
    t.identifier('GVK'),
    null,
    [],
    t.tsInterfaceBody([
      t.tsPropertySignature(t.identifier('group'), t.tsTypeAnnotation(t.tsStringKeyword())),
      t.tsPropertySignature(t.identifier('version'), t.tsTypeAnnotation(t.tsStringKeyword())),
      t.tsPropertySignature(t.identifier('kind'), t.tsTypeAnnotation(t.tsStringKeyword())),
    ])
  );
  statements.push(t.exportNamedDeclaration(gvkInterface));

  const interfaceProps = entries.map(({ key, typeName }) =>
    t.tsPropertySignature(
      t.stringLiteral(key),
      t.tsTypeAnnotation(t.tsTypeReference(t.identifier(typeName)))
    )
  );
  statements.push(
    t.exportNamedDeclaration(
      t.tsInterfaceDeclaration(
        t.identifier('ResourceTypeMap'),
        null,
        [],
        t.tsInterfaceBody(interfaceProps)
      )
    )
  );

  const uniqueTypeNames = Array.from(new Set(entries.map((entry) => entry.typeName)));
  
  let kubernetesResourceType: t.TSType;
  if (uniqueTypeNames.length === 0) {
    kubernetesResourceType = t.tsNeverKeyword();
  } else if (uniqueTypeNames.length === 1) {
    kubernetesResourceType = t.tsTypeReference(t.identifier(uniqueTypeNames[0]));
  } else {
    kubernetesResourceType = t.tsUnionType(
      uniqueTypeNames.map((name) => t.tsTypeReference(t.identifier(name)))
    );
  }
  
  statements.push(
    t.exportNamedDeclaration(
      t.tsTypeAliasDeclaration(
        t.identifier('KubernetesResource'),
        null,
        kubernetesResourceType
      )
    )
  );

  return statements;
}

// ---------------------------------------------
// GVK_OPS: Generate compact GVK → Operations index
// ---------------------------------------------

interface GVKEntry {
  key: string; // e.g., 'core/v1/Service'
  gvk: { group: string; version: string; kind: string };
  scope: 'Namespaced' | 'Cluster' | 'Unknown';
  types: { main: string; list?: string };
  ops: any; // OperationSpec-ish
}

const classifyOperation = (
  operationId: string | undefined,
  method: string
):
  | 'list' | 'listAllNamespaces' | 'read' | 'create'
  | 'replace' | 'patch' | 'delete' | 'deleteCollection'
  | 'watch' | 'unknown' => {
  if (!operationId) {
    switch (method) {
    case 'get': return 'read';
    case 'post': return 'create';
    case 'put': return 'replace';
    case 'patch': return 'patch';
    case 'delete': return 'delete';
    default: return 'unknown';
    }
  }
  const id = operationId.toLowerCase();
  if (id.startsWith('list')) return 'list';
  if (id.startsWith('create')) return 'create';
  if (id.startsWith('read')) return 'read';
  if (id.startsWith('replace')) return 'replace';
  if (id.startsWith('patch')) return 'patch';
  if (id.startsWith('deletecollection')) return 'deleteCollection';
  if (id.startsWith('delete')) return 'delete';
  if (id.startsWith('watch')) return 'watch';
  return 'unknown';
};

const getRefDefName = (resp?: Response): string | null => {
  const s = resp?.schema as any;
  if (s && typeof s === 'object' && s.$ref) {
    const parts = String(s.$ref).split('/');
    return parts.pop() || null;
  }
  return null;
};

const baseDefFromListName = (defName: string): string => {
  const parts = defName.split('.');
  const last = parts.pop() as string;
  if (last.endsWith('List')) return [...parts, last.slice(0, -4)].join('.');
  return defName;
};

const isNamespacedPathRe = /\/namespaces\/{[^}]+}\//;

// AST version for embedding into the same generated client file
function generateGVKOpsStatements(
  options: OpenAPIOptions,
  schema: OpenAPISpec
): t.Statement[] {
  const emptyGroupLabel = options.opsIndex?.emptyGroupLabel ?? 'core';
  const patchedSchema = applyJsonPatch(schema, options);

  const defToGVKs = new Map<string, { group: string; version: string; kind: string }[]>();
  
  // Extract GVK metadata from definitions section (original logic)
  Object.entries(patchedSchema.definitions || {}).forEach(([defName, defSchema]) => {
    const ext = (defSchema as any)['x-kubernetes-group-version-kind'] as Array<any> | undefined;
    if (ext && Array.isArray(ext)) {
      ext.forEach((e) => {
        const group: string = e.group ?? '';
        const version: string = e.version;
        const kind: string = e.kind;
        if (!defToGVKs.has(defName)) defToGVKs.set(defName, []);
        defToGVKs.get(defName)!.push({ group, version, kind });
      });
    }
  });

  // Extract GVK metadata from paths section (where it actually exists in many schemas)
  Object.entries(patchedSchema.paths).forEach(([path, pathItem]) => {
    METHOD_TYPES.forEach((m) => {
      const operation: Operation | undefined = pathItem[m as keyof OpenAPIPathItem] as Operation | undefined;
      if (!operation || !shouldIncludeOperation(options, pathItem, path, m as any)) return;
      
      // Check for GVK metadata in the operation
      const gvk = (operation as any)['x-kubernetes-group-version-kind'];
      if (gvk && typeof gvk === 'object') {
        const group: string = gvk.group ?? '';
        const version: string = gvk.version;
        const kind: string = gvk.kind;
        
        // Find the definition name that this operation refers to
        const retDef = getRefDefName(operation.responses?.['200']);
        const bodyParam = (operation.parameters || []).find((p) => p.in === 'body' && (p.schema as any)?.$ref);
        const bodyDef = bodyParam ? String((bodyParam!.schema as any).$ref).split('/').pop()! : null;
        const defCandidate = retDef || bodyDef;
        
        if (defCandidate) {
          const baseDef = baseDefFromListName(defCandidate);
          
          // Associate GVK with the base definition
          if (!defToGVKs.has(baseDef)) defToGVKs.set(baseDef, []);
          const baseExisting = defToGVKs.get(baseDef)!;
          const baseAlreadyExists = baseExisting.some(e => e.group === group && e.version === version && e.kind === kind);
          if (!baseAlreadyExists) {
            defToGVKs.get(baseDef)!.push({ group, version, kind });
          }
          
          // Also associate GVK with the List definition if it's different from base
          if (defCandidate !== baseDef) {
            if (!defToGVKs.has(defCandidate)) defToGVKs.set(defCandidate, []);
            const listExisting = defToGVKs.get(defCandidate)!;
            const listAlreadyExists = listExisting.some(e => e.group === group && e.version === version && e.kind === kind);
            if (!listAlreadyExists) {
              defToGVKs.get(defCandidate)!.push({ group, version, kind });
            }
          }
        }
      }
    });
  });

  const pathBaseToDef = new Map<string, string>();
  Object.entries(patchedSchema.paths).forEach(([path, pathItem]) => {
    METHOD_TYPES.forEach((m) => {
      const operation: Operation | undefined = pathItem[m as keyof OpenAPIPathItem] as Operation | undefined;
      if (!operation || !shouldIncludeOperation(options, pathItem, path, m as any)) return;
      const retDef = getRefDefName(operation.responses?.['200']);
      const bodyParam = (operation.parameters || []).find((p) => p.in === 'body' && (p.schema as any)?.$ref);
      const bodyDef = bodyParam ? String((bodyParam!.schema as any).$ref).split('/').pop()! : null;
      const defCandidate = retDef || bodyDef;
      if (!defCandidate) return;
      const baseDef = baseDefFromListName(defCandidate);
      const base = path.endsWith('/status') ? path.slice(0, -7) : path.endsWith('/scale') ? path.slice(0, -6) : path;
      const base2 = base.replace(/\/{[^}]+}$/g, '');
      pathBaseToDef.set(base2, baseDef);
    });
  });

  const map = new Map<string, GVKEntry>();
  Object.entries(patchedSchema.paths).forEach(([path, pathItem]) => {
    METHOD_TYPES.forEach((m) => {
      const operation: Operation | undefined = pathItem[m as keyof OpenAPIPathItem] as Operation | undefined;
      if (!operation || !shouldIncludeOperation(options, pathItem, path, m as any)) return;
      const kind = classifyOperation(operation.operationId, m);
      if (kind === 'watch' || kind === 'unknown') return;
      const methodName = getOperationMethodName(options, operation, m, path);
      const requestType = getOperationTypeName(options, operation, m, path) + 'Request';
      const retDef = getRefDefName(operation.responses?.['200']);
      const bodyParam = (operation.parameters || []).find((p) => p.in === 'body' && (p.schema as any)?.$ref);
      const bodyDef = bodyParam ? String((bodyParam!.schema as any).$ref).split('/').pop()! : null;
      const defCandidate = retDef || bodyDef || null;
      const { base, subresource } = ((): { base: string; subresource?: 'status' | 'scale' } => {
        if (path.endsWith('/status')) return { base: path.slice(0, -7), subresource: 'status' };
        if (path.endsWith('/scale')) return { base: path.slice(0, -6), subresource: 'scale' };
        return { base: path };
      })();
      const base2 = base.replace(/\/{[^}]+}$/g, '');
      let baseDef = defCandidate ? baseDefFromListName(defCandidate) : pathBaseToDef.get(base2);
      if (!baseDef) return;
      const gvks = defToGVKs.get(baseDef) || [];
      if (!gvks.length) return;
      const namespaced = isNamespacedPathRe.test(path);
      const params = parseRoute(path).params;
      const hasBody = (operation.parameters || []).some((p) => p.in === 'body' || p.in === 'formData');
      const hasQuery = (operation.parameters || []).some((p) => p.in === 'query');
      
      gvks.forEach((g) => {
        const groupNorm = g.group && g.group.length ? g.group : emptyGroupLabel;
        const key = `${groupNorm}/${g.version}/${g.kind}`;
        
        // Use qualified naming: keep core resources simple, qualify non-core resources
        const mainType = generateQualifiedTypeName(g, options, baseDef);
        const listType = defCandidate && /List$/.test(defCandidate.split('.').pop()!) ? generateQualifiedTypeName(g, options, defCandidate) : undefined;
        
        if (!map.has(key)) {
          map.set(key, { key, gvk: { group: groupNorm, version: g.version, kind: g.kind }, scope: 'Unknown', types: { main: mainType, ...(listType ? { list: listType } : {}) }, ops: {} });
        }
        const entry = map.get(key)!;
        if (namespaced) entry.scope = 'Namespaced'; else if (entry.scope !== 'Namespaced') entry.scope = 'Cluster';
      });
    });
  });

  const stmts: t.Statement[] = [];

  const resourceTypeEntries = Array.from(map.values()).map((entry) => ({
    key: entry.key,
    typeName: entry.types.main,
  }));

  stmts.push(...generateResourceTypeMapUtilities(resourceTypeEntries));

  return stmts;
}

const getOperationMethodName = (
  options: OpenAPIOptions,
  operation: Operation,
  method: string,
  path: string
) => {
  const defaultMethodName = toCamelCase(method + path.replace(/\W/g, '_'));
  const methodName = operation.operationId || defaultMethodName;

  if (options?.operationNamingStrategy?.renameMap) {
    return options.operationNamingStrategy.renameMap[methodName] || methodName;
  }

  return methodName;
};

const getOperationTypeName = (
  options: OpenAPIOptions,
  operation: Operation,
  method: string,
  path: string
) => {
  const defaultMethodName = toCamelCase(method + path.replace(/\W/g, '_'));
  const methodName = operation.operationId || defaultMethodName;

  if (!options?.operationNamingStrategy?.renameTypes) {
    return toPascalCase(methodName);
  }

  if (options?.operationNamingStrategy?.renameMap) {
    return toPascalCase(
      options.operationNamingStrategy.renameMap[methodName] || methodName
    );
  }

  return methodName;
};

export const createOperation = (
  options: OpenAPIOptions,
  operation: Operation,
  path: string,
  method: string,
  alias?: string,
  interfaceRenameMap?: { [key: string]: string }
): t.ClassMethod => {
  const typeName = getOperationTypeName(options, operation, method, path) + 'Request';
  const id = t.identifier('params');
  id.typeAnnotation = t.tsTypeAnnotation(
    t.tsTypeReference(t.identifier(typeName))
  );

  const opts = t.identifier('opts');
  opts.optional = true;
  opts.typeAnnotation = t.tsTypeAnnotation(
    t.tsTypeReference(t.identifier('APIClientRequestOpts'))
  );

  const params = [
    id,
    opts
  ];

  const hasBody = operation.parameters?.some(
    (param) => param.in === 'body' || param.in === 'formData'
  ) && ['post', 'put', 'patch'].includes(method)

  const hasQuery = operation.parameters?.some(
    (param) => param.in === 'query'
  );

  const returnType = getOperationReturnType(options, operation, method, interfaceRenameMap);
  const methodName = getOperationMethodName(options, operation, method, path);

  const callMethod = t.callExpression(
    t.memberExpression(t.thisExpression(), t.identifier(method)),
    [
      t.identifier('path'),
      hasQuery ? t.memberExpression(t.identifier('params'), t.identifier('query')) : t.nullLiteral(),  // The query parameter
      hasBody ? t.memberExpression(t.identifier('params'), t.identifier('body')) : t.nullLiteral(),  // The body parameter
      t.identifier('opts')
    ]
     
  );

  callMethod.typeParameters = t.tsTypeParameterInstantiation([returnType]);

  const methodFunction = t.classMethod(
    'method',
    t.identifier(alias ? toCamelCase(alias) : methodName),
    params,
    t.blockStatement([
      t.variableDeclaration('const', [
        t.variableDeclarator(
          t.identifier('path'),
          createPathTemplateLiteral(options, path)
        ),
      ]),
      t.returnStatement(t.awaitExpression(callMethod)),
    ]),
    false,
    false,
    false,
    true
  );
  methodFunction.returnType = t.tsTypeAnnotation(
    t.tsTypeReference(
      t.identifier('Promise'),
      t.tsTypeParameterInstantiation([returnType])
    )
  );

  return methodFunction;
};

export function generateMethods(
  options: OpenAPIOptions,
  schema: OpenAPISpec,
  interfaceRenameMap?: { [key: string]: string }
): t.ClassMethod[] {
  const methods: t.ClassMethod[] = [];

  // Iterate through each path and each method in the path
  Object.entries(schema.paths).forEach(([path, pathItem]) => {
    // const opParams: OpParameterInterfaces = getOpenApiParams(options, path, pathItem);

    METHOD_TYPES.forEach((method) => {
      // Hoist file path and key declaration for this hook
      const operation = (pathItem as any)[method] as Operation;
      if (!operation || !shouldIncludeOperation(options, pathItem, path, method as any)) {
        return;
      }

      const alias =
        options.operationNamingStrategy?.aliases?.[operation.operationId];

      if (alias) {
        methods.push(
          createOperation(options, operation, path, method, alias, interfaceRenameMap)
        );
      }
      methods.push(createOperation(options, operation, path, method, undefined, interfaceRenameMap));
    });
  });

  return methods;
}

export const getSwaggerJSONMethod = (): t.ClassMethod => {
  return t.classMethod(
    'method',
    t.identifier('getSwaggerJSON'),
    [],
    t.blockStatement([
      t.variableDeclaration('const', [
        t.variableDeclarator(
          t.identifier('path'),
          t.stringLiteral('/openapi/v2')
        ),
      ]),
      t.returnStatement(
        t.callExpression(
          t.memberExpression(t.thisExpression(), t.identifier('get')),
          [t.identifier('path')]
        )
      ),
    ]),
    false,
    false,
    false,
    true
  );
};

// Build interface rename map directly from schema for qualified naming
function buildInterfaceRenameMapFromSchema(
  schema: OpenAPISpec,
  options: OpenAPIOptions
): { [key: string]: string } {
  const renameMap: { [key: string]: string } = {};
  const defToGVKs = new Map<string, { group: string; version: string; kind: string }[]>();
  const simpleNameCounts = new Map<string, number>();
  Object.keys(schema.definitions || {}).forEach((defName) => {
    const simpleName = defName.split('.').pop() || defName;
    simpleNameCounts.set(simpleName, (simpleNameCounts.get(simpleName) ?? 0) + 1);
  });
  
  // Extract GVK metadata from definitions section (original logic)
  Object.entries(schema.definitions || {}).forEach(([defName, defSchema]) => {
    const ext = (defSchema as any)['x-kubernetes-group-version-kind'] as Array<any> | undefined;
    if (ext && Array.isArray(ext)) {
      ext.forEach((e) => {
        const group: string = e.group ?? '';
        const version: string = e.version;
        const kind: string = e.kind;
        if (!defToGVKs.has(defName)) defToGVKs.set(defName, []);
        defToGVKs.get(defName)!.push({ group, version, kind });
      });
    }
  });

  // Extract GVK metadata from paths section (where it actually exists in many schemas)
  Object.entries(schema.paths).forEach(([path, pathItem]) => {
    METHOD_TYPES.forEach((m) => {
      const operation: Operation | undefined = pathItem[m as keyof OpenAPIPathItem] as Operation | undefined;
      if (!operation || !shouldIncludeOperation(options, pathItem, path, m as any)) return;
      
      // Check for GVK metadata in the operation
      const gvk = (operation as any)['x-kubernetes-group-version-kind'];
      if (gvk && typeof gvk === 'object') {
        const group: string = gvk.group ?? '';
        const version: string = gvk.version;
        const kind: string = gvk.kind;
        
        // Find the definition name that this operation refers to
        const retDef = getRefDefName(operation.responses?.['200']);
        const bodyParam = (operation.parameters || []).find((p) => p.in === 'body' && (p.schema as any)?.$ref);
        const bodyDef = bodyParam ? String((bodyParam!.schema as any).$ref).split('/').pop()! : null;
        const defCandidate = retDef || bodyDef;
        
        if (defCandidate) {
          const baseDef = baseDefFromListName(defCandidate);
          
          // Associate GVK with the base definition
          if (!defToGVKs.has(baseDef)) defToGVKs.set(baseDef, []);
          const baseExisting = defToGVKs.get(baseDef)!;
          const baseAlreadyExists = baseExisting.some(e => e.group === group && e.version === version && e.kind === kind);
          if (!baseAlreadyExists) {
            defToGVKs.get(baseDef)!.push({ group, version, kind });
          }
          
          // Also associate GVK with the List definition if it's different from base
          if (defCandidate !== baseDef) {
            if (!defToGVKs.has(defCandidate)) defToGVKs.set(defCandidate, []);
            const listExisting = defToGVKs.get(defCandidate)!;
            const listAlreadyExists = listExisting.some(e => e.group === group && e.version === version && e.kind === kind);
            if (!listAlreadyExists) {
              defToGVKs.get(defCandidate)!.push({ group, version, kind });
            }
          }
        }
      }
    });
  });

  // Build rename map for each definition that has GVK data
  defToGVKs.forEach((gvks, defName) => {
    if (gvks.length > 0) {
      // Use the first GVK entry (there's usually only one per definition)
      const gvk = gvks[0];
      const qualifiedName = generateQualifiedTypeName(gvk, options, defName);
      
      // Extract the simple name from the definition name (e.g., "io.k8s.api.core.v1.Service" -> "Service")
      const simpleName = defName.split('.').pop() || defName;
      
      // Only add to rename map if the qualified name is different from the simple name
      if (qualifiedName !== simpleName) {
        renameMap[defName] = qualifiedName;
      }
    }
  });

  Object.keys(schema.definitions || {}).forEach((defName) => {
    const simpleName = defName.split('.').pop() || defName;
    const requiresQualification =
      (simpleNameCounts.get(simpleName) ?? 0) > 1 || options.namingStrategy?.useLastSegment === false;
    if (!requiresQualification) return;
    if (renameMap[defName]) return;

    const gvks = defToGVKs.get(defName);
    if (gvks && gvks.length) {
      renameMap[defName] = generateQualifiedTypeName(gvks[0], options, defName);
    } else {
      renameMap[defName] = pascalFromDefinitionName(defName);
    }
  });
  
  return renameMap;
}

export function generateOpenApiClient(
  options: OpenAPIOptions,
  schema: OpenAPISpec
): string {
  // Apply JSON patches if configured
  const patchedSchema = applyJsonPatch(schema, options);
  
  const interfaceRenameMap = buildInterfaceRenameMapFromSchema(patchedSchema, options);

  const methods = [];
  if (options.includeSwaggerUrl) {
    methods.push(getSwaggerJSONMethod());
  }
  methods.push(...generateMethods(options, patchedSchema, interfaceRenameMap));

  const constructorOptionsParam = t.identifier('options');
  constructorOptionsParam.typeAnnotation = t.tsTypeAnnotation(
    t.tsTypeReference(t.identifier('APIClientOptions'))
  );

  const classBody = t.classBody([
    t.classMethod(
      'constructor',
      t.identifier('constructor'),
      [constructorOptionsParam],
      t.blockStatement([
        t.expressionStatement(
          t.callExpression(t.super(), [t.identifier('options')])
        ),
      ])
    ),
    ...methods,
  ]);

  const clientClass = t.exportNamedDeclaration(
    t.classDeclaration(
      t.identifier(options.clientName),
      t.identifier('APIClient'),
      classBody,
      []
    )
  );

  //// INTERFACES
  const apiSchema = {
    title: options.clientName,
    definitions: patchedSchema.definitions,
  };

  const types = generateTypeScriptTypes(apiSchema, {
    ...(options as any),
    exclude: [options.clientName, ...(options.exclude ?? [])],
    namingStrategy: {
      ...(options.namingStrategy || {}),
      renameMap: {
        ...(options.namingStrategy?.renameMap || {}),
        ...interfaceRenameMap,
      },
    },
  });
  const openApiTypes = generateOpenApiTypes(options, patchedSchema, interfaceRenameMap);
  const gvkOpsStmts = options.opsIndex?.enabled ? generateGVKOpsStatements(options, patchedSchema) : [];

  let code = generate(
    t.file(
      t.program([
        t.importDeclaration(
          [
            t.importSpecifier(
              t.identifier('APIClient'),
              t.identifier('APIClient')
            ),
            t.importSpecifier(
              t.identifier('APIClientRequestOpts'),
              t.identifier('APIClientRequestOpts')
            ),
            t.importSpecifier(
              t.identifier('APIClientOptions'),
              t.identifier('APIClientOptions')
            ),
          ],
          t.stringLiteral(options.npmApiClient)
        ),
        ...types,
        ...openApiTypes,
        clientClass,
        ...gvkOpsStmts,
      ])
    )
  ).code;


  return code;
}

// Interface for generated hook files
export interface HookFile {
  fileName: string;
  code: string;
}

// Component for raw hook AST nodes
export interface HookComponent {
  importDecls: t.ImportDeclaration[];
  funcDecl: t.ExportNamedDeclaration;
  constDecls: t.VariableDeclaration[];
}

/**
 * Collect raw AST components (imports + function) for each hook
 */

export function collectReactQueryHookComponents(
  options: OpenAPIOptions,
  schema: OpenAPISpec
): HookComponent[] {
  if (!options.hooks?.enabled) return [];

  const components: HookComponent[] = [];
  const contextHookName = options.hooks?.contextHookName ?? `use${toPascalCase(schema.info.title)}`;
  const contextImportPath = options.hooks?.contextImportPath;

  Object.entries(schema.paths).forEach(([path, pathItem]) => {
    METHOD_TYPES.forEach((method) => {
      const operation = (pathItem as any)[method] as Operation;
      if (!operation || !shouldIncludeOperation(options, pathItem, path, method as any)) return;

      const opMethodName = getOperationMethodName(options, operation, method, path);
      const hookName = `use${toPascalCase(opMethodName)}`;
      const keyName = `${normalizePath(path).toUpperCase()}_KEY`;
      const keyDecl = t.variableDeclaration('const', [
        t.variableDeclarator(
          t.identifier(keyName),
          t.arrayExpression([t.stringLiteral(normalizePath(path))])
        ),
      ]);
      const requestTypeName = getOperationTypeName(options, operation, method, path) + 'Request';
      const returnTypeAST = getOperationReturnType(options, operation, method);
      const methodName = opMethodName;

      const importDecls: t.ImportDeclaration[] = [
        t.importDeclaration(
          [t.importSpecifier(t.identifier(contextHookName), t.identifier(contextHookName))],
          t.stringLiteral(contextImportPath)
        ),
      ];
      if (t.isTSTypeReference(returnTypeAST) && t.isIdentifier(returnTypeAST.typeName)) {
        const typeName = returnTypeAST.typeName.name;
        importDecls.push(
          t.importDeclaration(
            [t.importSpecifier(t.identifier(typeName), t.identifier(typeName))],
            t.stringLiteral(options.hooks.typesImportPath)
          )
        );
      }
      // Import request type only for create (POST) and update (PUT) operations
      if (
        !['get', 'post', 'put', 'patch', 'delete'].includes(method)
      ) {
        return;
      }
      
      // Import request type only for create (POST) and update (PUT) operations
      if (
        method === 'post' ||
        method === 'put' ||
        method === 'patch' ||
        method === 'delete'
      ) {
        importDecls.push(
          t.importDeclaration(
            [t.importSpecifier(t.identifier(requestTypeName), t.identifier(requestTypeName))],
            t.stringLiteral(options.hooks.typesImportPath)
          )
        );
      }
      const statements: t.Statement[] = [];

      // Dynamically extract path parameter names from schema
      const pathParams = (pathItem.parameters ?? []).filter(p => p.in === 'path').map(p => p.name);

      if (method === 'get') {
        importDecls.push(
          t.importDeclaration([
            t.importSpecifier(t.identifier('useQuery'), t.identifier('useQuery')),
          ], t.stringLiteral('@tanstack/react-query'))
        );

        // Import request type for GET hook parameter
        importDecls.push(
          t.importDeclaration(
            [t.importSpecifier(t.identifier(requestTypeName), t.identifier(requestTypeName))],
            t.stringLiteral(options.hooks.typesImportPath)
          )
        );

        const paramName = 'params';
        // Create a typed parameter identifier for request params
        const paramId = t.identifier(paramName);
        paramId.typeAnnotation = t.tsTypeAnnotation(
          t.tsTypeReference(t.identifier(requestTypeName))
        );
        const funcParams = [paramId];

        statements.push(
          t.variableDeclaration('const', [
            t.variableDeclarator(
              t.identifier('client'),
              t.memberExpression(
                t.callExpression(t.identifier(contextHookName), []),
                t.identifier('client')
              )
            )
          ])
        );

        const queryFn = t.arrowFunctionExpression([], t.blockStatement([
          t.returnStatement(
            t.awaitExpression(
              t.callExpression(
                t.memberExpression(t.identifier('client'), t.identifier(methodName)),
                [t.identifier(paramName)]
              )
            )
          )
        ]), true);

        // Build enabled expression: require all path params to be defined
        const enabledExpr = pathParams.length > 0
          ? pathParams.reduce((acc, param) => {
              const cmp = t.binaryExpression(
                '!==',
                t.memberExpression(
                  t.memberExpression(t.identifier(paramName), t.identifier('path')),
                  t.identifier(param)
                ),
                t.identifier('undefined')
              );
              return acc ? t.logicalExpression('&&', acc, cmp) : cmp;
            }, null as t.Expression | null) || t.booleanLiteral(true)
          : t.booleanLiteral(true);
        const queryCall = t.callExpression(t.identifier('useQuery'), [
          t.objectExpression([
            t.objectProperty(
              t.identifier('queryKey'),
              t.arrayExpression([
                t.spreadElement(t.identifier(keyName)),
                ...pathParams.map(param =>
                  t.memberExpression(
                    t.memberExpression(t.identifier(paramName), t.identifier('path')),
                    t.identifier(param)
                  )
                )
              ])
            ),
            t.objectProperty(t.identifier('queryFn'), queryFn),
            t.objectProperty(
              t.identifier('enabled'),
              enabledExpr
            )
          ])
        ]);

        queryCall.typeParameters = t.tsTypeParameterInstantiation([
          returnTypeAST,
          t.tsTypeReference(t.identifier('Error')),
        ]);

        statements.push(t.returnStatement(queryCall));

        const funcDecl = t.exportNamedDeclaration(
          t.functionDeclaration(t.identifier(`${hookName}Query`), funcParams, t.blockStatement(statements)),
          []
        );

        components.push({ importDecls, funcDecl, constDecls: [keyDecl] });
      } else {
        importDecls.push(
          t.importDeclaration([
            t.importSpecifier(t.identifier('useMutation'), t.identifier('useMutation')),
            t.importSpecifier(t.identifier('useQueryClient'), t.identifier('useQueryClient')),
          ], t.stringLiteral('@tanstack/react-query'))
        );

        const funcParams: t.Identifier[] = [];

        statements.push(
          t.variableDeclaration('const', [
            t.variableDeclarator(
              t.identifier('client'),
              t.memberExpression(t.callExpression(t.identifier(contextHookName), []), t.identifier('client'))
            )
          ])
        );
        statements.push(
          t.variableDeclaration('const', [
            t.variableDeclarator(
              t.identifier('queryClient'),
              t.callExpression(t.identifier('useQueryClient'), [])
            )
          ])
        );

        const mutationFn = t.arrowFunctionExpression(
          [t.identifier('request')],
          t.blockStatement([
            t.returnStatement(
              t.callExpression(
                t.memberExpression(t.identifier('client'), t.identifier(methodName)),
                [t.identifier('request')]
              )
            )
          ])
        );
        mutationFn.async = true;

        const onSuccess = t.arrowFunctionExpression(
          [t.identifier('_'), t.identifier('response')],
          t.blockStatement([
            t.expressionStatement(
              t.callExpression(
                t.memberExpression(t.identifier('queryClient'), t.identifier('invalidateQueries')),
                [t.objectExpression([
                  t.objectProperty(
                    t.identifier('queryKey'),
                    t.arrayExpression([
                      t.spreadElement(t.identifier(keyName)),
                      ...pathParams.map(param =>
                        t.memberExpression(
                          t.memberExpression(t.identifier('response'), t.identifier('path')),
                          t.identifier(param)
                        )
                      )
                    ])
                  )
                ])]
              )
            )
          ])
        );

        const mutationCall = t.callExpression(t.identifier('useMutation'), [
          t.objectExpression([
            t.objectProperty(t.identifier('mutationFn'), mutationFn),
            t.objectProperty(t.identifier('onSuccess'), onSuccess)
          ])
        ]);

        mutationCall.typeParameters = t.tsTypeParameterInstantiation([
          returnTypeAST,
          t.tsTypeReference(t.identifier('Error')),
          t.tsTypeReference(t.identifier(requestTypeName)),
        ]);

        statements.push(t.returnStatement(mutationCall));

        const funcDecl = t.exportNamedDeclaration(
          t.functionDeclaration(t.identifier(hookName), funcParams, t.blockStatement(statements)),
          []
        );

        components.push({ importDecls, funcDecl, constDecls: [keyDecl] });
      }
    });
  });

  return components;
}

/**
 * Generate final HookFile entries by grouping imports and rendering all hooks together
 */
export function generateReactQueryHooks(
  options: OpenAPIOptions,
  schema: OpenAPISpec
): string {
  // Apply JSON patches if configured
  const patchedSchema = applyJsonPatch(schema, options);
  
  const components = collectReactQueryHookComponents(options, patchedSchema);
  if (!components.length) return ''
  // Group imports
  const importMap = new Map<string, Set<string>>();
  // Collect unique imports and consts
  const constMap = new Map<string, t.VariableDeclaration>();
  components.forEach((comp) => {
    comp.importDecls.forEach((decl) =>
      decl.specifiers
        .filter((s): s is t.ImportSpecifier => t.isImportSpecifier(s))
        .forEach((spec) => {
          const source = decl.source.value as string;
          const id = spec.imported;
          const importedName = t.isIdentifier(id) ? id.name : id.value;
          if (!importMap.has(source)) importMap.set(source, new Set());
          importMap.get(source)!.add(importedName);
        })
    );
    // collect const declarations
    comp.constDecls.forEach((decl) => {
      const varName = (decl.declarations[0].id as t.Identifier).name;
      constMap.set(varName, decl);
    });
  });
  // Build unique import declarations
  const uniqueImportDecls = Array.from(importMap.entries()).map(
    ([source, names]) =>
      t.importDeclaration(
        Array.from(names).map((name) => t.importSpecifier(t.identifier(name), t.identifier(name))),
        t.stringLiteral(source)
      )
  );
  // Unique const declarations
  const uniqueConstDecls = Array.from(constMap.values());
  // Collect all function declarations
  const funcDecls = components.map((comp) => comp.funcDecl);
  // Build AST and generate code
  const ast = t.file(t.program([...uniqueImportDecls, ...uniqueConstDecls, ...funcDecls]));
  const code = generate(ast).code;
  return code;
}

/**
 * Normalize a URL path into a safe file name fragment.
 */
function normalizePath(path: string): string {
  return path
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

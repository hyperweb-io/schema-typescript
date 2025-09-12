import generate from '@babel/generator';
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
  // @ts-ignore
  const operation: Operation = pathItem[method];

  if (!operation) return false;

  const shouldIncludeByPath = shouldInclude(path, {
    include: options.paths?.include ?? [],
    exclude: options.paths?.exclude ?? [],
  });

  if (!shouldIncludeByPath) return false;

  const shouldIncludeByTag = operation.tags.some((tag) =>
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

export const getOperationReturnType = (
  options: OpenAPIOptions,
  operation: Operation,
  method: string
) => {
  if (operation.responses) {
    if (operation.responses['200']) {
      const prop = operation.responses['200'];
      return getResponseType(options, prop);
    }
  }
  if (method === 'get') return t.tsAnyKeyword();
  return t.tsVoidKeyword();
};

export const getResponseType = (options: OpenAPIOptions, prop: Response) => {
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
    return t.tsTypeReference(
      t.identifier(getApiTypeNameSafe(options, definitionName))
    );
  }
  return t.tsAnyKeyword();
};

export const getParameterType = (options: OpenAPIOptions, prop: Parameter) => {
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
    return t.tsTypeReference(
      t.identifier(getApiTypeNameSafe(options, definitionName))
    );
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
  pathItem: OpenAPIPathItem
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
        // @ts-ignore
        const operation: Operation = pathItem[method];
        if (!shouldIncludeOperation(options, pathItem, path, method as any))
          return;

        // @ts-ignore
        const methodType:
          | 'get'
          | 'post'
          | 'put'
          | 'delete'
          | 'options'
          | 'head'
          | 'patch' = method;

        // @ts-ignore
        const opParamMethod: ParameterInterfaces = opParams[method];

        const props: t.TSPropertySignature[] = [];

        Object.keys(opParamMethod).forEach((key) => {
          // @ts-ignore
          const params: Parameter[] = opParamMethod[key];
          // @ts-ignore
          const paramType: 'query' | 'body' | 'formData' | 'header' | 'path' =
            key;

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
              t.tsTypeAnnotation(getParameterType(options, param))
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
        // @ts-ignore
        const operation: Operation = pathItem[method];
        if (!shouldIncludeOperation(options, pathItem, path, method as any))
          return;

        // @ts-ignore
        const opParamMethod: ParameterInterfaces = opParams[method];

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
  schema: OpenAPISpec
): t.ExportNamedDeclaration[] {
  const interfaces: t.TSInterfaceDeclaration[] = [];
  // Iterate through each path and each method to generate interfaces
  Object.entries(schema.paths).forEach(([path, pathItem]) => {
    interfaces.push(...generateOpenApiParams(options, schema, path, pathItem));
  });
  return interfaces.map((i) => t.exportNamedDeclaration(i));
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

  const pathBaseToDef = new Map<string, string>();
  Object.entries(patchedSchema.paths).forEach(([path, pathItem]) => {
    METHOD_TYPES.forEach((m) => {
      // @ts-ignore
      const operation: Operation = (pathItem as any)[m];
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
      // @ts-ignore
      const operation: Operation = (pathItem as any)[m];
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
      const mainType = getApiTypeNameSafe(options, baseDef.split('.').pop()!);
      const listType = defCandidate && /List$/.test(defCandidate.split('.').pop()!) ? getApiTypeNameSafe(options, defCandidate.split('.').pop()!) : undefined;
      gvks.forEach((g) => {
        const groupNorm = g.group && g.group.length ? g.group : emptyGroupLabel;
        const key = `${groupNorm}/${g.version}/${g.kind}`;
        if (!map.has(key)) {
          map.set(key, { key, gvk: { group: groupNorm, version: g.version, kind: g.kind }, scope: 'Unknown', types: { main: mainType, ...(listType ? { list: listType } : {}) }, ops: {} });
        }
        const entry = map.get(key)!;
        if (namespaced) entry.scope = 'Namespaced'; else if (entry.scope !== 'Namespaced') entry.scope = 'Cluster';
        const spec = { methodName, requestType, pathParams: params, hasBody, hasQuery };
        if (!subresource) {
          if (kind === 'list') {
            if (namespaced && entry.scope === 'Namespaced') (entry.ops as any).list = (entry.ops as any).list || spec;
            else if (!namespaced && entry.scope === 'Namespaced') (entry.ops as any).listAllNamespaces = (entry.ops as any).listAllNamespaces || spec;
            else (entry.ops as any).list = (entry.ops as any).list || spec;
          } else {
            (entry.ops as any)[kind] = (entry.ops as any)[kind] || spec;
          }
        } else {
          (entry.ops as any)[subresource] = (entry.ops as any)[subresource] || {};
          (entry.ops as any)[subresource][kind] = (entry.ops as any)[subresource][kind] || spec;
        }
      });
    });
  });

  const stmts: t.Statement[] = [];
  // Interfaces
  stmts.push(t.exportNamedDeclaration(t.tsInterfaceDeclaration(
    t.identifier('GVK'), null, [], t.tsInterfaceBody([
      t.tsPropertySignature(t.identifier('group'), t.tsTypeAnnotation(t.tsStringKeyword())),
      t.tsPropertySignature(t.identifier('version'), t.tsTypeAnnotation(t.tsStringKeyword())),
      t.tsPropertySignature(t.identifier('kind'), t.tsTypeAnnotation(t.tsStringKeyword())),
    ])
  )));
  stmts.push(t.exportNamedDeclaration(t.tsTypeAliasDeclaration(t.identifier('GVKKey'), null, t.tsStringKeyword())));
  stmts.push(t.exportNamedDeclaration(t.tsTypeAliasDeclaration(
    t.identifier('OperationKind'), null,
    t.tsUnionType(['list','listAllNamespaces','read','create','replace','patch','delete','deleteCollection'].map(s=>t.tsLiteralType(t.stringLiteral(s))))
  )));
  stmts.push(t.exportNamedDeclaration(t.tsInterfaceDeclaration(
    t.identifier('OperationSpec'), null, [], t.tsInterfaceBody([
      t.tsPropertySignature(t.identifier('methodName'), t.tsTypeAnnotation(t.tsStringKeyword())),
      t.tsPropertySignature(t.identifier('requestType'), t.tsTypeAnnotation(t.tsStringKeyword())),
      t.tsPropertySignature(t.identifier('pathParams'), t.tsTypeAnnotation(t.tsArrayType(t.tsStringKeyword()))),
      t.tsPropertySignature(t.identifier('hasBody'), t.tsTypeAnnotation(t.tsBooleanKeyword())),
      t.tsPropertySignature(t.identifier('hasQuery'), t.tsTypeAnnotation(t.tsBooleanKeyword())),
    ]))));
  stmts.push(t.exportNamedDeclaration(t.tsInterfaceDeclaration(
    t.identifier('TypeRefs'), null, [], t.tsInterfaceBody([
      t.tsPropertySignature(t.identifier('main'), t.tsTypeAnnotation(t.tsStringKeyword())),
      (()=>{ const p=t.tsPropertySignature(t.identifier('list'), t.tsTypeAnnotation(t.tsStringKeyword())); (p as any).optional=true; return p; })(),
    ])
  )));

  const statusRecord = t.tsTypeReference(t.identifier('Partial'), t.tsTypeParameterInstantiation([
    t.tsTypeReference(t.identifier('Record'), t.tsTypeParameterInstantiation([
      t.tsUnionType([t.tsLiteralType(t.stringLiteral('read')), t.tsLiteralType(t.stringLiteral('replace')), t.tsLiteralType(t.stringLiteral('patch'))]),
      t.tsTypeReference(t.identifier('OperationSpec')),
    ]))
  ]));

  stmts.push(t.exportNamedDeclaration(t.tsInterfaceDeclaration(
    t.identifier('ResourceOps'), null, [], t.tsInterfaceBody([
      t.tsPropertySignature(t.identifier('key'), t.tsTypeAnnotation(t.tsTypeReference(t.identifier('GVKKey')))),
      t.tsPropertySignature(t.identifier('gvk'), t.tsTypeAnnotation(t.tsTypeReference(t.identifier('GVK')))),
      t.tsPropertySignature(t.identifier('scope'), t.tsTypeAnnotation(t.tsUnionType([t.tsLiteralType(t.stringLiteral('Namespaced')), t.tsLiteralType(t.stringLiteral('Cluster')), t.tsLiteralType(t.stringLiteral('Unknown'))]))),
      t.tsPropertySignature(t.identifier('types'), t.tsTypeAnnotation(t.tsTypeReference(t.identifier('TypeRefs')))),
      t.tsPropertySignature(t.identifier('ops'), t.tsTypeAnnotation(t.tsIntersectionType([
        t.tsTypeReference(t.identifier('Partial'), t.tsTypeParameterInstantiation([
          t.tsTypeReference(t.identifier('Record'), t.tsTypeParameterInstantiation([
            t.tsTypeReference(t.identifier('OperationKind')),
            t.tsTypeReference(t.identifier('OperationSpec')),
          ]))
        ])),
        t.tsTypeLiteral([
          (()=>{ const p=t.tsPropertySignature(t.identifier('status'), t.tsTypeAnnotation(statusRecord)); (p as any).optional=true; return p; })(),
          (()=>{ const p=t.tsPropertySignature(t.identifier('scale'), t.tsTypeAnnotation(statusRecord)); (p as any).optional=true; return p; })(),
        ])
      ])))
    ])
  )));

  // ResourceTypeMap
  const typeMapProps = Array.from(map.values()).map(e => t.tsPropertySignature(t.stringLiteral(e.key), t.tsTypeAnnotation(t.tsTypeReference(t.identifier(e.types.main)))));
  stmts.push(t.exportNamedDeclaration(t.tsInterfaceDeclaration(t.identifier('ResourceTypeMap'), null, [], t.tsInterfaceBody(typeMapProps))));
  const listTypeProps = Array.from(map.values()).filter(e=>e.types.list).map(e => t.tsPropertySignature(t.stringLiteral(e.key), t.tsTypeAnnotation(t.tsTypeReference(t.identifier(e.types.list!)))));
  stmts.push(t.exportNamedDeclaration(t.tsInterfaceDeclaration(t.identifier('ResourceListTypeMap'), null, [], t.tsInterfaceBody(listTypeProps))));

  // const GVK_OPS = { ... }
  const specObj = (spec:any) => spec ? t.objectExpression([
    t.objectProperty(t.identifier('methodName'), t.stringLiteral(spec.methodName)),
    t.objectProperty(t.identifier('requestType'), t.stringLiteral(spec.requestType)),
    t.objectProperty(t.identifier('pathParams'), t.arrayExpression((spec.pathParams||[]).map((p:string)=>t.stringLiteral(p)))),
    t.objectProperty(t.identifier('hasBody'), t.booleanLiteral(!!spec.hasBody)),
    t.objectProperty(t.identifier('hasQuery'), t.booleanLiteral(!!spec.hasQuery)),
  ]) : null;

  const entries = Array.from(map.values()).sort((a,b)=>a.key.localeCompare(b.key)).map(e=>{
    const props: t.ObjectProperty[] = [];
    const add=(k:string,s:any)=>{ const o=specObj(s); if(o) props.push(t.objectProperty(t.identifier(k),o)); };
    add('list',(e as any).ops.list); add('listAllNamespaces',(e as any).ops.listAllNamespaces); add('read',(e as any).ops.read); add('create',(e as any).ops.create); add('replace',(e as any).ops.replace); add('patch',(e as any).ops.patch); add('delete',(e as any).ops.delete); add('deleteCollection',(e as any).ops.deleteCollection);
    if ((e as any).ops.status && (((e as any).ops.status.read) || ((e as any).ops.status.replace) || ((e as any).ops.status.patch))) {
      const sp: t.ObjectProperty[]=[]; const addB=(n:string,s:any)=>{const o=specObj(s); if(o) sp.push(t.objectProperty(t.identifier(n),o));}; addB('read',(e as any).ops.status.read); addB('replace',(e as any).ops.status.replace); addB('patch',(e as any).ops.status.patch); props.push(t.objectProperty(t.identifier('status'), t.objectExpression(sp)));
    }
    if ((e as any).ops.scale && (((e as any).ops.scale.read) || ((e as any).ops.scale.replace) || ((e as any).ops.scale.patch))) {
      const sp: t.ObjectProperty[]=[]; const addB=(n:string,s:any)=>{const o=specObj(s); if(o) sp.push(t.objectProperty(t.identifier(n),o));}; addB('read',(e as any).ops.scale.read); addB('replace',(e as any).ops.scale.replace); addB('patch',(e as any).ops.scale.patch); props.push(t.objectProperty(t.identifier('scale'), t.objectExpression(sp)));
    }
    return t.objectProperty(
      t.stringLiteral(e.key),
      t.objectExpression([
        t.objectProperty(t.identifier('key'), t.stringLiteral(e.key)),
        t.objectProperty(t.identifier('gvk'), t.objectExpression([
          t.objectProperty(t.identifier('group'), t.stringLiteral(e.gvk.group)),
          t.objectProperty(t.identifier('version'), t.stringLiteral(e.gvk.version)),
          t.objectProperty(t.identifier('kind'), t.stringLiteral(e.gvk.kind)),
        ])),
        t.objectProperty(t.identifier('scope'), t.stringLiteral(e.scope)),
        t.objectProperty(t.identifier('types'), t.objectExpression([
          t.objectProperty(t.identifier('main'), t.stringLiteral(e.types.main)),
          ...(e.types.list ? [t.objectProperty(t.identifier('list'), t.stringLiteral(e.types.list))] : []),
        ])),
        t.objectProperty(t.identifier('ops'), t.objectExpression(props)),
      ])
    );
  });
  stmts.push(t.exportNamedDeclaration(t.variableDeclaration('const', [ t.variableDeclarator(t.identifier('GVK_OPS'), t.objectExpression(entries)) ])));

  // toKey/getOps/isNamespaced
  const gvkParam = () => { const p=t.identifier('gvk'); p.typeAnnotation = t.tsTypeAnnotation(t.tsTypeReference(t.identifier('GVK'))); return p; };
  stmts.push(t.exportNamedDeclaration(t.functionDeclaration(t.identifier('toKey'), [gvkParam()], t.blockStatement([
    t.returnStatement(t.tsAsExpression(t.templateLiteral([
      t.templateElement({ raw: '', cooked: '' }), t.templateElement({ raw: '/', cooked: '/' }), t.templateElement({ raw: '/', cooked: '/' }, true)
    ], [t.memberExpression(t.identifier('gvk'), t.identifier('group')), t.memberExpression(t.identifier('gvk'), t.identifier('version')), t.memberExpression(t.identifier('gvk'), t.identifier('kind'))]), t.tsTypeReference(t.identifier('GVKKey'))))
  ]))));
  stmts.push(t.exportNamedDeclaration(t.functionDeclaration(t.identifier('getOps'), [gvkParam()], t.blockStatement([
    t.returnStatement(t.memberExpression(t.identifier('GVK_OPS'), t.callExpression(t.identifier('toKey'), [t.identifier('gvk')]), true))
  ]))));
  stmts.push(t.exportNamedDeclaration(t.functionDeclaration(t.identifier('isNamespaced'), [gvkParam()], t.blockStatement([
    t.returnStatement(t.binaryExpression('===', t.optionalMemberExpression(t.memberExpression(t.identifier('GVK_OPS'), t.callExpression(t.identifier('toKey'), [t.identifier('gvk')]), true), t.identifier('scope'), false, true), t.stringLiteral('Namespaced')))
  ]))));

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
  alias?: string
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

  const returnType = getOperationReturnType(options, operation, method);
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
  schema: OpenAPISpec
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
          createOperation(options, operation, path, method, alias)
        );
      }
      methods.push(createOperation(options, operation, path, method));
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

export function generateOpenApiClient(
  options: OpenAPIOptions,
  schema: OpenAPISpec
): string {
  // Apply JSON patches if configured
  const patchedSchema = applyJsonPatch(schema, options);
  
  const methods = [];
  if (options.includeSwaggerUrl) {
    methods.push(getSwaggerJSONMethod());
  }
  methods.push(...generateMethods(options, patchedSchema));

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
  });
  const openApiTypes = generateOpenApiTypes(options, patchedSchema);
  const gvkOpsStmts = options.opsIndex?.enabled ? generateGVKOpsStatements(options, patchedSchema) : [];

  return generate(
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

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
import { createPathTemplateLiteral } from './utils';

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

export function generateOpenApiParams(
  options: OpenAPIOptions,
  path: string,
  pathItem: OpenAPIPathItem
): t.TSInterfaceDeclaration[] {
  const opParams: OpParameterInterfaces = getOpenApiParams(
    options,
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
  const pathParms =
    pathItem.parameters?.filter((param) => param.in === 'path') ?? [];
  if (pathParms.length !== pathInfo.params.length) {
    const parameters =
      pathItem.parameters?.filter((param) => param.in !== 'path') ?? [];
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
    opParams.pathLevel[param.in].push(param);
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
            opParamMethod[param.in].push(param);
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
    interfaces.push(...generateOpenApiParams(options, path, pathItem));
  });
  return interfaces.map((i) => t.exportNamedDeclaration(i));
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
  const typeName =
    getOperationTypeName(options, operation, method, path) + 'Request';
  const id = t.identifier('params');
  id.typeAnnotation = t.tsTypeAnnotation(
    t.tsTypeReference(t.identifier(typeName))
  );
  const params = [id];

  const returnType = getOperationReturnType(options, operation, method);
  const methodName = getOperationMethodName(options, operation, method, path);

  const callMethod = t.callExpression(
    t.memberExpression(t.thisExpression(), t.identifier(method)),
    ['post', 'put', 'patch', 'formData'].includes(method)
      ? [
        t.identifier('path'),
        t.memberExpression(t.identifier('params'), t.identifier('body')),
      ]
      : [t.identifier('path')]
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
      if (Object.prototype.hasOwnProperty.call(pathItem, method)) {
        // @ts-ignore
        const operation: Operation = pathItem[method];
        if (!shouldIncludeOperation(options, pathItem, path, method as any))
          return;

        const alias =
          options.operationNamingStrategy?.aliases?.[operation.operationId];
        if (alias) {
          methods.push(
            createOperation(options, operation, path, method, alias)
          );
        }
        methods.push(createOperation(options, operation, path, method));
      }
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
  const methods = [];
  if (options.includeSwaggerUrl) {
    methods.push(getSwaggerJSONMethod());
  }
  methods.push(...generateMethods(options, schema));

  const classBody = t.classBody([
    t.classMethod(
      'constructor',
      t.identifier('constructor'),
      [t.identifier('options')],
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
    definitions: schema.definitions,
  };

  const types = generateTypeScriptTypes(apiSchema, {
    ...(options as any),
    exclude: [options.clientName, ...(options.exclude ?? [])],
  });
  const openApiTypes = generateOpenApiTypes(options, schema);

  return generate(
    t.file(
      t.program([
        t.importDeclaration(
          [
            t.importSpecifier(
              t.identifier('APIClient'),
              t.identifier('APIClient')
            ),
          ],
          t.stringLiteral(options.npmApiClient)
        ),
        ...types,
        ...openApiTypes,
        clientClass,
      ])
    )
  ).code;
}

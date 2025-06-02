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
            t.importSpecifier(
              t.identifier('APIClientRequestOpts'),
              t.identifier('APIClientRequestOpts')
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
      if (method === 'post' || method === 'put' || method === 'patch') {
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
  const components = collectReactQueryHookComponents(options, schema);
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

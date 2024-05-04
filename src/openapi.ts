import generate from "@babel/generator";
import * as t from '@babel/types';

import { SchemaTSOptions } from "./context";
import { OpenAPIPathItem, OpenAPISpec, Operation, Parameter } from "./openapi.types";
import { getTypeNameSafe, makeComment, toCamelCase, toPascalCase } from "./utils";
import { JSONSchema } from "./types";

interface ParsedRoute {
  path: string;
  params: string[];
}

function parseRoute(route: string): ParsedRoute {
  const paramRegex = /\{([^\}]+)\}/g;  // Regular expression to find {param}
  let match: RegExpExecArray | null;
  const params: string[] = [];

  // Extract parameters using regex
  while ((match = paramRegex.exec(route)) !== null) {
    params.push(match[1]);  // Capture the parameter name, excluding the braces
  }

  // Return the original path and the extracted parameters
  return {
    path: route,
    params
  };
}

export interface OpenAPIOptions extends SchemaTSOptions {
  version?: 'v1' | 'v1beta1' | 'v2beta1' | 'v2beta2';
  mergedParams?: boolean;
}

export const getApiTypeNameSafe = (options: OpenAPIOptions, str: string): string => {
  return getTypeNameSafe(options.namingStrategy, str);
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
      throw new Error('no property set on open api parameter schema!')
    }
    const ref = prop.schema.$ref.split('/');
    const definitionName = ref.pop();
    return t.tsTypeReference(t.identifier(getApiTypeNameSafe(options, definitionName)));
  }
  return t.tsAnyKeyword();
}

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
    body: []
  }
}


export function generateOpenApiParams(options: OpenAPIOptions, path: string, pathItem: OpenAPIPathItem): t.TSInterfaceDeclaration[] {
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

  const interfaces: t.TSInterfaceDeclaration[] = [];

  const pathInfo = parseRoute(path);

  // do we need to simulate params?
  // BEGIN SANITIZE PARAMS
  pathItem.parameters = pathItem.parameters ?? [];
  const pathParms = pathItem.parameters?.filter(param => param.in === 'path') ?? [];
  if (pathParms.length !== pathInfo.params.length) {
    const parameters = pathItem.parameters?.filter(param => param.in !== 'path') ?? []
    pathInfo.params.forEach(name => {
      const found = pathParms.find(param => param.name === name);
      parameters.push(found ? found : {
        name,
        type: 'string',
        required: true,
        in: 'path'
      })
    });
    pathItem.parameters = parameters;
  }
  // END SANITIZE PARAMS

  // load Path-Level params
  pathItem.parameters.forEach(param => {
    opParams.pathLevel[param.in].push(param);
  });

  [
    'get',
    'post',
    'put',
    'delete',
    'options',
    'head',
    'patch'
  ]
    .forEach(method => {
      if (Object.prototype.hasOwnProperty.call(pathItem, method)) {
        // @ts-ignore
        const operation: Operation = pathItem[method];
        if (!operation) return;

        // @ts-ignore
        const methodType: 'get' | 'post' | 'put' | 'delete' | 'options' | 'head' | 'patch' = method;

        // @ts-ignore
        const opParamMethod: ParameterInterfaces = opParams[method];

        // push Path-Level params into op
        opParamMethod.path.push(...opParams.pathLevel.path);
        opParamMethod.query.push(...opParams.pathLevel.query);
        opParamMethod.header.push(...opParams.pathLevel.header);


        // get the params
        if (operation.parameters) {
          // Categorize parameters by 'in' field
          operation.parameters.forEach(param => {
            opParamMethod[param.in].push(param)
          });
        }

        const props: t.TSPropertySignature[] = [];

        Object.keys(opParamMethod).forEach(key => {
          // @ts-ignore
          const params: Parameter[] = opParamMethod[key];
          // @ts-ignore
          const paramType: 'query' | 'body' | 'formData' | 'header' | 'path' = key;


          // only include body sometimes
          if (['body', 'formData'].includes(paramType) && !['post', 'put', 'patch'].includes(methodType)) return;

          const inner: t.TSPropertySignature[] = [];
          params.forEach(param => {
            const p = t.tsPropertySignature(
              t.identifier(param.name),
              t.tsTypeAnnotation(getParameterType(options, param))
            );
            if (!param.required) {
              p.optional = true;
            }
            
            inner.push(p);

          })

          if (!options.mergedParams) {
            if (paramType === 'body') {
              props.push(...inner);
            } else {
              const p = t.tsPropertySignature(
                t.identifier(paramType),
                t.tsTypeAnnotation(
                  t.tsTypeLiteral(
                    [
                      ...inner
                    ]
                  )
                )
              );
              if (inner.length) {
                props.push(
                  p
                )
              }
            }
          } else {
            props.push(...inner);
          }
        });

        const typeName = toPascalCase(getOperationMethodName(operation, method, path)) + 'Request';
        const paramsInterface = t.tsInterfaceDeclaration(
          t.identifier(typeName),
          null,
          [],
          t.tsInterfaceBody(props)
        );
        interfaces.push(paramsInterface);
      }
    });

  return interfaces;
};
export function generateOpenApiTypes(options: OpenAPIOptions, schema: OpenAPISpec): t.ExportNamedDeclaration[] {
  const interfaces: t.TSInterfaceDeclaration[] = [];
  // Iterate through each path and each method to generate interfaces
  Object.entries(schema.paths).forEach(([path, pathItem]) => {
    interfaces.push(...generateOpenApiParams(options, path, pathItem));
  });
  return interfaces.map(i => t.exportNamedDeclaration(i))
}

/**

includes: {
  requests: ['patch', 'head', 'options', 'get', 'delete'],
  tags: ['patch', 'head', 'options', 'get', 'delete']
} 


*/

const getOperationMethodName = (operation: Operation, method: string, path: string) => {
  const methodName = operation.operationId || toCamelCase(method + path.replace(/\W/g, '_'));
  return methodName;
}

export function generateMethods(options: OpenAPIOptions, schema: OpenAPISpec): t.ClassMethod[] {
  const methods: t.ClassMethod[] = [];

  // Iterate through each path and each method in the path
  Object.entries(schema.paths).forEach(([path, pathItem]) => {
    ['get', 'post', 'put', 'delete', 'options', 'head', 'patch'].forEach(method => {
      if (Object.prototype.hasOwnProperty.call(pathItem, method)) {
        // @ts-ignore
        const operation: Operation = pathItem[method];
        const methodName = getOperationMethodName(operation, method, path);
        const params = operation.parameters ? operation.parameters.map(param =>
          t.identifier(param.name)
        ) : [];

        const methodFunction = t.classMethod(
          'method',
          t.identifier(methodName),
          params,
          t.blockStatement([
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier('path'),
                t.stringLiteral(path)
              )
            ]),
            t.returnStatement(
              t.callExpression(
                t.memberExpression(t.thisExpression(), t.identifier(method)),
                [t.identifier('path')]
              )
            )
          ]),
          false, // Static
          false, // Generator
          false, // Async (set to true if the operation should be asynchronous)
          true   // Is a method
        );
        if (options.includeMethodComments && operation.description) {
          // @ts-ignore
          methodFunction.leadingComments = makeComment(operation.description);
        }
        methods.push(methodFunction);
      }

    });
  });

  return methods;
}


export function generateOpenApiClient(options: OpenAPIOptions, schema: OpenAPISpec): string {
  const methods = [
    t.classMethod(
      'method',
      t.identifier('getSwaggerJSON'),
      [],
      t.blockStatement([
        t.variableDeclaration('const', [
          t.variableDeclarator(
            t.identifier('path'),
            t.stringLiteral('/openapi/v2') // Change to '/swagger.json' if needed
          )
        ]),
        t.returnStatement(
          t.callExpression(
            t.memberExpression(t.thisExpression(), t.identifier('get')),
            [t.identifier('path')]
          )
        )
      ]),
      false,
      false,
      false,
      true
    ),
    ...generateMethods(options, schema)
  ]

  const classBody = t.classBody([
    t.classMethod(
      'constructor',
      t.identifier('constructor'),
      [t.identifier('options')],
      t.blockStatement([
        t.expressionStatement(
          t.callExpression(t.super(), [t.identifier('options')])
        )
      ])
    ),
    ...methods
  ]);

  const clientClass = t.classDeclaration(
    t.identifier('KubernetesClient'),
    t.identifier('APIClient'),
    classBody,
    []
  );

  //// INTERFACES

  const types = generateOpenApiTypes(options, schema);


  return generate(t.file(t.program([
    ...types,
    clientClass
  ]))).code;
};


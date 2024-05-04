import generate from "@babel/generator";
import * as t from '@babel/types';

import { OpenAPISpec, Operation } from "./openapi.types";
import { JSONSchema } from "./types";


export function generateMethods(schema: OpenAPISpec): t.ClassMethod[] {
  const methods: t.ClassMethod[] = [];

  // Iterate through each path and each method in the path
  Object.entries(schema.paths).forEach(([path, pathItem]) => {
    ['get', 'post', 'put', 'delete', 'options', 'head', 'patch'].forEach(method => {
      if (Object.prototype.hasOwnProperty.call(pathItem, method)) {
        // @ts-ignore
        const operation: Operation = pathItem[method];
        const methodName = operation.operationId || method + path.replace(/\W/g, '_');
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

        methods.push(methodFunction);
      }

    });
  });

  return methods;
}


export function generateOpenApiClient(schema: OpenAPISpec): string {
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
    ...generateMethods(schema)
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

  return generate(t.file(t.program([clientClass]))).code;
};


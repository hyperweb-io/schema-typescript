import * as t from '@babel/types';

import { OpenAPIOptions } from './types';

/**
 * Converts a URL path with placeholders into a Babel AST TemplateLiteral.
 * This is used to dynamically generate paths in API client classes.
 *
 * @param {string} path - The API path, potentially containing placeholders like {param}.
 * @returns {t.TemplateLiteral} - The constructed TemplateLiteral representing the dynamic path.
 */
export function createPathTemplateLiteral(options: OpenAPIOptions, path: string): t.TemplateLiteral {
  const segments = path.split('/');
  const expressions: (t.Identifier | t.MemberExpression)[] = [];
  const quasis = [];
  let accumulatedPath = '';
  let isFirst = true;

  segments.forEach((segment, _index) => {
    if (segment.startsWith('{') && segment.endsWith('}')) {
      // Dynamic segment
      const paramName = segment.slice(1, -1);
      // Push the accumulated static text as a quasi before adding the expression
      quasis.push(t.templateElement({ raw: accumulatedPath + '/', cooked: accumulatedPath }, false));
      accumulatedPath = '';  // Reset accumulated path after adding to quasis

      // expressions.push(t.identifier(`params.${paramName}`));
      expressions.push(
        options.mergedParams ?
          t.memberExpression(t.identifier('params'), t.identifier(paramName)) :
          t.memberExpression(
            t.memberExpression(t.identifier('params'), t.identifier('path'))
            , t.identifier(paramName))
      );

      // Prepare the next quasi to start with a slash if this is not the last segment
      isFirst = false;
    } else {
      // Accumulate static text, ensuring to prepend a slash if it's not the first segment
      accumulatedPath += (isFirst ? '' : '/') + segment;
      isFirst = false;
    }
  });

  // Add the final accumulated static text as the last quasi
  quasis.push(t.templateElement({ raw: accumulatedPath, cooked: accumulatedPath }, true));  // Mark the last quasi as tail

  return t.templateLiteral(quasis, expressions);
}

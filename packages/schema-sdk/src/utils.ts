import * as t from '@babel/types';
import * as jsonpatch from 'fast-json-patch';

import { OpenAPIOptions } from './types';
import type { OpenAPISpec } from './openapi.types';

/**
 * Converts a URL path with placeholders into a Babel AST TemplateLiteral.
 * This is used to dynamically generate paths in API client classes.
 *
 * @param {string} path - The API path, potentially containing placeholders like {param}.
 * @returns {t.TemplateLiteral} - The constructed TemplateLiteral representing the dynamic path.
 */
export function createPathTemplateLiteral(
  options: OpenAPIOptions,
  path: string
): t.TemplateLiteral {
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
      quasis.push(
        t.templateElement(
          { raw: accumulatedPath + '/', cooked: accumulatedPath },
          false
        )
      );
      accumulatedPath = ''; // Reset accumulated path after adding to quasis

      // expressions.push(t.identifier(`params.${paramName}`));
      expressions.push(
        options.mergedParams
          ? t.memberExpression(t.identifier('params'), t.identifier(paramName))
          : t.memberExpression(
            t.memberExpression(t.identifier('params'), t.identifier('path')),
            t.identifier(paramName)
          )
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
  quasis.push(
    t.templateElement({ raw: accumulatedPath, cooked: accumulatedPath }, true)
  ); // Mark the last quasi as tail

  return t.templateLiteral(quasis, expressions);
}

/**
 * Applies JSON patch operations to an OpenAPI specification
 * @param spec - The OpenAPI specification object
 * @param options - The OpenAPI options containing jsonpatch operations
 * @returns The patched OpenAPI specification
 */
export function applyJsonPatch<T>(spec: T, options: OpenAPIOptions): T {
  if (!options.jsonpatch || options.jsonpatch.length === 0) {
    return spec;
  }

  try {
    // Create a deep copy to avoid mutating the original
    const specCopy = JSON.parse(JSON.stringify(spec));
    
    // Apply the patches
    const patchedSpec = jsonpatch.applyPatch(specCopy, options.jsonpatch, true, false);
    
    return patchedSpec.newDocument;
  } catch (error) {
    console.error('Failed to apply JSON patches:', error);
    throw new Error(`Failed to apply JSON patches: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Resolve an in-spec $ref object against OpenAPI v2 sections (definitions, parameters, responses).
 * If the provided object is not a $ref, it is returned as-is.
 */
export function resolveRefObject<T>(spec: OpenAPISpec, obj: any): T {
  let current: any = obj;
  let depth = 0;
  const MAX_DEPTH = 8;
  while (current && typeof current === 'object' && current.$ref && depth < MAX_DEPTH) {
    const ref: string = current.$ref as string;
    if (!ref.startsWith('#/')) break;
    const parts = ref.slice(2).split('/'); // remove leading '#/'
    const section = parts[0];
    const key = decodeURIComponent(parts.slice(1).join('/'));
    let resolved: any;
    switch (section) {
    case 'definitions':
      resolved = spec.definitions?.[key];
      break;
    case 'parameters':
      resolved = spec.parameters?.[key];
      break;
    case 'responses':
      resolved = spec.responses?.[key];
      break;
    default:
      resolved = undefined;
    }
    if (!resolved) break;
    current = resolved;
    depth += 1;
  }
  return current as T;
}

/**
 * Convenience wrapper to resolve an object if it is a $ref, otherwise return it unchanged.
 */
export function resolveMaybeRef<T>(spec: OpenAPISpec, obj: any): T {
  if (obj && typeof obj === 'object' && (obj as any).$ref) {
    return resolveRefObject<T>(spec, obj);
  }
  return obj as T;
}

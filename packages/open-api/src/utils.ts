import { minimatch } from 'minimatch';
import * as t from '@babel/types';

import { SchemaNamingStrategy } from "./context";
import { JSONSchema } from './types';
import { OpenAPIOptions } from './openapi';

export function toPascalCase(str: string) {
  return str.replace(/(^|_|\s|-)(\w)/g, (_: any, __: any, letter: string) => letter.toUpperCase()).replace(/[_\s-]/g, '');
}

export function toCamelCase(key: string) {
  return key
    // First, remove all leading non-alphabet characters
    .replace(/^[^a-zA-Z]+/, '')
    // Convert what follows a separator into upper case
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    // Ensure the first character of the result is always lowercase
    .replace(/^./, (c) => c.toLowerCase());
}

// // Determine if the key is a valid JavaScript identifier
export function isValidIdentifier(key: string) {
  return /^[$A-Z_][0-9A-Z_$]*$/i.test(key) && !/^[0-9]+$/.test(key);
}


// Determine if the key is a valid JavaScript-like identifier, allowing internal hyphens
export function isValidIdentifierCamelized(key: string) {
  return /^[$A-Z_][0-9A-Z_$\-]*$/i.test(key) && !/^[0-9]+$/.test(key) && !/^-/.test(key);
}

export const getTypeNameSafe = (strategy: SchemaNamingStrategy, str: string): string => {
  if (Object.prototype.hasOwnProperty.call(strategy.renameMap ?? {}, str)) {
    return toPascalCase(strategy.renameMap[str]);
  }

  if (strategy.useLastSegment) {
    const parts = str.split('.');
    if (parts.length > 1) {
      return toPascalCase(parts[parts.length - 1]);
    }
    return toPascalCase(str);
  }

  if (str.match(/\./)) return toPascalCase(str.replace(/\./g, '_'));

  return toPascalCase(str);
};


const globPattern = /\*+([^+@!?\*\[\(]*)/;

interface ShouldIncludeOptions {
  include: string[];
  exclude: string[];
}

export const shouldInclude = (type: string, options: ShouldIncludeOptions): boolean => {
  // Determine if 'include' and 'exclude' are effectively set
  const includesEffectivelySet = options.include && options.include.length > 0;
  const excludesEffectivelySet = options.exclude && options.exclude.length > 0;

  // Function to check if any patterns in the array match the type
  const matchesPattern = (patterns: string[], type: string): boolean =>
    patterns.some(pattern => globPattern.test(pattern) ? minimatch(type, pattern) : type === pattern);

  // Check if the type is explicitly included or excluded using minimatch or exact match
  const isIncluded = includesEffectivelySet ? matchesPattern(options.include, type) : true;
  const isExcluded = excludesEffectivelySet ? matchesPattern(options.exclude, type) : false;

  // Apply the logic based on whether includes or excludes are effectively set
  if (includesEffectivelySet && excludesEffectivelySet) {
    return isIncluded && !isExcluded;
  } else if (includesEffectivelySet) {
    return isIncluded;
  } else if (excludesEffectivelySet) {
    return !isExcluded;
  }

  // Default behavior if neither is effectively set
  return true;
}

export const cleanComment = (str: string) => {
  return str.replace(/\*\//g, "*\\/");
};

const ensureOneSpaceEnd = (str: string) => {
  return /[\s\n\t]$/.test(str) ? str : `${str} `;
};

const ensureOneSpace = (str: string) => {
  return /^[\s\n\t]+/.test(str) ? str : ` ${str}`;
};

export const processComment = (comment: string) => {
  if (!comment) return '';

  if (!/[\n]+/.test(comment)) {
    return `*${ensureOneSpaceEnd(ensureOneSpace(cleanComment(comment)))}`;
  }

  let lines = comment.split('\n');
  lines = ['*', ...lines.map(line => cleanComment(line).trim()), ' ']; // Clean and trim each line
  return lines.map((line, i) => {
    if (i === 0) return line;
    if (i === lines.length - 1) return line; // The last line is just a space
    return ` *${ensureOneSpace(line)}`; // Ensure a space after * for clean formatting
  }).join('\n');
};

export const makeComment = (comment: string) => {
  return [{ type: 'CommentBlock', value: ` ${comment} ` }]
}

export const makeCommentLine = (comment: string): t.CommentLine[] => {
  // @ts-ignore
  return [{ type: 'CommentBlock', value: ` ${comment} ` }] as t.CommentLine[];
}

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

import generate from "@babel/generator";
import * as t from "@babel/types";

import { SchemaTSContext, type SchemaTSOptions } from "./context";
import type { JSONSchema } from "./types";
import { getTypeNameSafe, isValidIdentifier, isValidIdentifierCamelized, makeCommentLine, shouldInclude, toCamelCase } from "./utils";

const getSchemaTypeNameSafe = (ctx: SchemaTSContext, str: string): string => {
  return getTypeNameSafe(ctx.options.namingStrategy, str);
};

const identifier = (name: string, typeAnnotation: t.TSTypeAnnotation) => {
  const i = t.identifier(name);
  i.typeAnnotation = typeAnnotation;
  return i;
};

const anyOrObjectWithUnknownProps = (ctx: SchemaTSContext) => {
  return ctx.options.strictTypeSafety ? t.tsTypeLiteral([
    t.tsIndexSignature(
      [
        identifier('key', t.tsTypeAnnotation(
          t.tsStringKeyword()
        ))
      ],
      t.tsTypeAnnotation(t.tsUnknownKeyword())
    )
  ]) : t.tsAnyKeyword();
}

export function generateTypeScriptTypes(schema: JSONSchema, options?: Partial<SchemaTSOptions>): t.ExportNamedDeclaration[] {
  const ctx = new SchemaTSContext(options, schema, schema, []);
  return generateInterfaces(ctx, schema);
}

export function generateTypeScript(schema: JSONSchema, options?: Partial<SchemaTSOptions>): string {
  const ctx = new SchemaTSContext(options, schema, schema, []);
  const interfaces = generateInterfaces(ctx, schema);
  return generate(t.file(t.program(interfaces))).code;
}

export function generateInterfaces(ctx: SchemaTSContext, schema: JSONSchema): t.ExportNamedDeclaration[] {
  const interfaces = [];

  try {
    // Process both $defs and definitions
    const definitions = schema.$defs || schema.definitions || {};
    for (const key in definitions) {
      if (shouldInclude(key, {
        include: ctx.options.include,
        exclude: ctx.options.exclude,
      })) {
        interfaces.push(createInterfaceDeclaration(ctx, key, definitions[key]));
      }
    }
  } catch (e) {
    console.error('Error processing interfaces');
    throw e;
  }

  // Process the main schema
  const title = schema.title;
  if (!title) {
    throw new Error('schema or options require a title');
  }
  if (shouldInclude(title, {
    include: ctx.options.include,
    exclude: ctx.options.exclude,
  })) {
    interfaces.push(createInterfaceDeclaration(ctx, title, schema));
  }
  return interfaces;
}

const createExportDeclarationForType = (
  ctx: SchemaTSContext,
  name: string,
  schema: JSONSchema,
  node: t.Declaration,
) => {
  const result =  t.exportNamedDeclaration(node);

  if (ctx.options.includeTypeComments && schema.description) {

    if (name.includes('.')) {
      // for complex names, let's add them for clarity/mapping
      result.leadingComments = [makeCommentLine(name)[0], makeCommentLine(schema.description)[0]]
    } else {
      result.leadingComments = makeCommentLine(schema.description)
    }

  }
  return result;
}

function createInterfaceDeclaration(
  ctx: SchemaTSContext,
  name: string,
  schema: JSONSchema
): t.ExportNamedDeclaration {
  // Handle standard properties if they exist
  let bodyElements: any = [];
  if (schema.properties) {
    const properties = schema.properties;
    const required = schema.required || [];
    bodyElements = Object.keys(properties).map(key => {
      const prop = properties[key];
      return createPropertySignature(ctx, key, prop, required, schema);
    });
  }

  // Handling additionalProperties if they exist
  if (schema.additionalProperties) {
    const additionalType = typeof schema.additionalProperties === 'boolean' ?
      t.tsStringKeyword() : getTypeForProp(ctx, schema.additionalProperties, [], schema);
    const indexSignature = t.tsIndexSignature(
      [t.identifier("key")], // index name, can be any valid name
      t.tsTypeAnnotation(additionalType)
    );
    indexSignature.parameters[0].typeAnnotation = t.tsTypeAnnotation(t.tsStringKeyword());
    bodyElements.push(indexSignature);
  }

  // Handling oneOf, anyOf, allOf if properties are not defined
  if (!schema.properties && (schema.oneOf || schema.anyOf || schema.allOf)) {
    const types = [];
    if (schema.oneOf) {
      types.push(getTypeForProp(ctx, { oneOf: schema.oneOf }, [], schema));
    }
    if (schema.anyOf) {
      types.push(getTypeForProp(ctx, { anyOf: schema.anyOf }, [], schema));
    }
    if (schema.allOf) {
      types.push(getTypeForProp(ctx, { allOf: schema.allOf }, [], schema));
    }

    // Create a union type if multiple types are generated
    const combinedType = types.length > 1 ? t.tsUnionType(types) : types[0];

    // Create a type alias instead of an interface if we're only handling these constructs
    const typeAlias = t.tsTypeAliasDeclaration(t.identifier(getSchemaTypeNameSafe(ctx, name)), null, combinedType);
    return createExportDeclarationForType(ctx, name, schema, typeAlias);
  }

  // Finally, create the interface declaration if there are any body elements
  if (bodyElements.length > 0) {
    const interfaceDeclaration = t.tsInterfaceDeclaration(
      t.identifier(getSchemaTypeNameSafe(ctx, name)),
      null,
      [],
      t.tsInterfaceBody(bodyElements)
    );
    return createExportDeclarationForType(ctx, name, schema, interfaceDeclaration);
  }

  if (schema.type) {
    return createExportDeclarationForType(ctx, name, schema, t.tsTypeAliasDeclaration(t.identifier(getSchemaTypeNameSafe(ctx, name)), null, getTypeForProp(ctx, schema, [], schema)))    
  }

  if (ctx.options.overrides && Object.prototype.hasOwnProperty.call(ctx.options.overrides, name)) {
    return createExportDeclarationForType(ctx, name, schema,
      t.tsTypeAliasDeclaration(t.identifier(getSchemaTypeNameSafe(ctx, name)), null,
      getTypeForProp(ctx, ctx.options.overrides[name], [], schema)
    ));
  }

  // Fallback to exporting a basic type if nothing else is possible
  // console.warn(`No properties or type definitions found for ${name}, defaulting to 'any'.`);
  return createExportDeclarationForType(ctx, name, schema, t.tsTypeAliasDeclaration(t.identifier(getSchemaTypeNameSafe(ctx, name)), null, t.tsAnyKeyword()))
}

function createPropertySignature(
  ctx: SchemaTSContext,
  key: string,
  prop: JSONSchema,
  required: string[],
  schema: JSONSchema
): t.TSPropertySignature {
  let camelCaseFn: (str: string) => string = toCamelCase;
  if (ctx.options.camelCaseFn) camelCaseFn = ctx.options.camelCaseFn;
  const name = ctx.options.camelCase ? camelCaseFn(key) : key;
  const propType = getTypeForProp(ctx, prop, required, schema);
  let identifier: t.Identifier | t.StringLiteral;
  let isIdent: boolean;
  if (ctx.options.camelCase) {
    isIdent = isValidIdentifierCamelized(key);
  } else {
    isIdent = isValidIdentifier(key);
  }
  identifier = isIdent ? t.identifier(name) : t.stringLiteral(key);
  const propSig = t.tsPropertySignature(
    identifier,
    t.tsTypeAnnotation(propType)
  );
  propSig.optional = !required.includes(key);
  if (ctx.options.includePropertyComments && prop.description) {
    propSig.leadingComments = makeCommentLine(prop.description);
  }

  return propSig;
}

function getTypeForProp(ctx: SchemaTSContext, prop: JSONSchema, required: string[], schema: JSONSchema): t.TSType {
  if (prop.$ref) {
    return resolveRefType(ctx, prop.$ref, schema);
  }

  if (prop.enum) {
    const enumType = prop.enum.map(enumValue => t.tsLiteralType(t.stringLiteral(enumValue)));
    return t.tsUnionType(enumType);
  }

  if (prop.const) {
    return t.tsLiteralType(t.stringLiteral(prop.const));
  }

  if (prop.type) {
    if (Array.isArray(prop.type)) {
      const arrayType = prop.type.map(type => getTypeForProp(ctx, { type, items: prop.items }, [], schema));
      return t.tsUnionType(arrayType);
    }

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
        if (prop.items) {
          return t.tsArrayType(getTypeForProp(ctx, prop.items, required, schema));
        } else {
          throw new Error('Array items specification is missing');
        }
      case 'object':
        if (prop.properties) {
          const nestedProperties = prop.properties;
          const nestedRequired = prop.required || [];
          const typeElements = Object.keys(nestedProperties).map(nestedKey => {
            const nestedProp = nestedProperties[nestedKey];
            return createPropertySignature(ctx, nestedKey, nestedProp, nestedRequired, schema);
          });
          return t.tsTypeLiteral(typeElements);
        } else {
          // Handle dynamic properties with strict type safety option
          return anyOrObjectWithUnknownProps(ctx);
        }
      default:
        return t.tsAnyKeyword();
    }
  }

  // Handling oneOf, anyOf, allOf
  if (prop.anyOf) {
    const types = prop.anyOf.map((subProp) => getTypeForProp(ctx, subProp, required, schema));
    return t.tsUnionType(types);
  }
  if (prop.allOf) {
    const types = prop.allOf.map((subProp) => getTypeForProp(ctx, subProp, required, schema));
    return t.tsIntersectionType(types);
  }
  if (prop.oneOf) {
    const types = prop.oneOf.map((subProp) => getTypeForProp(ctx, subProp, required, schema));
    return t.tsUnionType(types);
  }

  // Fallback when no types are defined
  return t.tsAnyKeyword()

}

function getTypeReferenceFromSchema(ctx: SchemaTSContext, schema: JSONSchema, definitionName: string): t.TSType | null {
  if (definitionName) {

    // if (ctx.options.overrides && Object.prototype.hasOwnProperty.call(ctx.options.overrides, definitionName)) {
    //   return getTypeForProp(ctx, ctx.options.overrides[definitionName], [], schema);
    // }

    if (schema.$defs && schema.$defs[definitionName]) {
      return t.tsTypeReference(t.identifier(getSchemaTypeNameSafe(ctx, definitionName)));
    } else if (schema.definitions && schema.definitions[definitionName]) {
      return t.tsTypeReference(t.identifier(getSchemaTypeNameSafe(ctx, definitionName)));
    }
  }
  return null;  // Return null if no type reference is found
}


function resolveRefType(ctx: SchemaTSContext, ref: string, schema: JSONSchema): t.TSType {
  const path = ref.split('/');
  const definitionName = path.pop();

  // Try to resolve the type reference from the local schema
  const localTypeReference = getTypeReferenceFromSchema(ctx, schema, definitionName);
  if (localTypeReference) {
    return localTypeReference;
  }

  // Try to resolve the type reference from the root schema
  const rootTypeReference = getTypeReferenceFromSchema(ctx, ctx.root, definitionName);
  if (rootTypeReference) {
    return rootTypeReference;
  }

  // If no definitions are found in either schema, throw an error
  throw new Error(`Reference ${ref} not found in definitions or $defs.`);
}

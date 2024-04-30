import generate from "@babel/generator";
import * as t from "@babel/types";

import { SchemaTSContext, type SchemaTSOptions } from "./context";
import type { JSONSchema } from "./types";
import { isValidIdentifier, isValidIdentifierCamelized, toCamelCase, toPascalCase } from "./utils";

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

export function generateTypeScript(schema: JSONSchema, options?: Partial<SchemaTSOptions>): string {
  const interfaces = [];
  const ctx = new SchemaTSContext(options, schema, schema, []);

  try {
    // Process both $defs and definitions
    const definitions = schema.$defs || schema.definitions || {};
    for (const key in definitions) {
      interfaces.push(createInterfaceDeclaration(ctx, toPascalCase(key), definitions[key]));
    }
  } catch (e) {
    console.error('Error processing interfaces');
    throw e;
  }

  // Process the main schema
  const title = schema.title;
  if (!title) {
    console.error('schema or options require a title');
    return ''; // Ensure there's a return on error condition
  }
  interfaces.push(createInterfaceDeclaration(ctx, toPascalCase(title), schema));
  return generate(t.file(t.program(interfaces))).code;
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
    const typeAlias = t.tsTypeAliasDeclaration(t.identifier(name), null, combinedType);
    return t.exportNamedDeclaration(typeAlias);
  }

  // Finally, create the interface declaration if there are any body elements
  if (bodyElements.length > 0) {
    const interfaceDeclaration = t.tsInterfaceDeclaration(
      t.identifier(name),
      null,
      [],
      t.tsInterfaceBody(bodyElements)
    );
    return t.exportNamedDeclaration(interfaceDeclaration);
  }

  if (schema.type) {
    return t.exportNamedDeclaration(t.tsTypeAliasDeclaration(t.identifier(name), null, getTypeForProp(ctx, schema, [], schema)));
  }

  // Fallback to exporting a basic type if nothing else is possible
  console.warn(`No properties or type definitions found for ${name}, defaulting to 'any'.`);
  return t.exportNamedDeclaration(t.tsTypeAliasDeclaration(t.identifier(name), null, t.tsAnyKeyword()));
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
      const arrayType = prop.type.map(type => getTypeForProp(ctx, {type, items: prop.items}, [], schema));
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

function getTypeReferenceFromSchema(schema: JSONSchema, definitionName: string): t.TSType | null {
  if (definitionName) {
    if (schema.$defs && schema.$defs[definitionName]) {
      return t.tsTypeReference(t.identifier(toPascalCase(definitionName)));
    } else if (schema.definitions && schema.definitions[definitionName]) {
      return t.tsTypeReference(t.identifier(toPascalCase(definitionName)));
    }
  }
  return null;  // Return null if no type reference is found
}


function resolveRefType(ctx: SchemaTSContext, ref: string, schema: JSONSchema): t.TSType {
  const path = ref.split('/');
  const definitionName = path.pop();

  // Try to resolve the type reference from the local schema
  const localTypeReference = getTypeReferenceFromSchema(schema, definitionName);
  if (localTypeReference) {
    return localTypeReference;
  }

  // Try to resolve the type reference from the root schema
  const rootTypeReference = getTypeReferenceFromSchema(ctx.root, definitionName);
  if (rootTypeReference) {
    return rootTypeReference;
  }

  // If no definitions are found in either schema, throw an error
  throw new Error(`Reference ${ref} not found in definitions or $defs.`);
}

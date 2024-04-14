import generate from "@babel/generator";
import * as t from "@babel/types";

import { defaultOptions, SchemaTSContext, type SchemaTSOptions } from "./context";
import type { JSONSchema, JSONSchemaProperty } from "./types";
import { isValidIdentifier, toCamelCase, toPascalCase } from "./utils";

export function generateTypeScript(schema: JSONSchema, options?: SchemaTSOptions): string {
  const interfaces = [];
  const opts = options || defaultOptions;
  const ctx = new SchemaTSContext(opts, schema, schema, []);

  try {

    // Process definitions first
    if (schema.$defs) {
      for (const key in schema.$defs) {
        interfaces.push(createInterfaceDeclaration(ctx, toPascalCase(key), schema.$defs[key]));
      }
    }
  } catch (e) {
    console.error('Error processing interfaces');
    throw e;
  }
  // Process the main schema
  const title = schema.title;
  if (!title) {
    console.error('schema or options require a title');
  }
  interfaces.push(createInterfaceDeclaration(ctx, toPascalCase(title), schema));
  return generate(t.file(t.program(interfaces))).code;
}

function createInterfaceDeclaration(
  ctx: SchemaTSContext,
  name: string,
  schema: JSONSchema
): t.ExportNamedDeclaration {
  const properties = schema.properties || {};
  const required = schema.required || [];
  const bodyElements: (t.TSIndexSignature | t.TSPropertySignature)[] = Object.keys(properties).map(key => {
    const prop = properties[key];
    return createPropertySignature(ctx, key, prop, required, schema);
  });

  // Handling additionalProperties
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

  const interfaceDeclaration = t.tsInterfaceDeclaration(
    t.identifier(name),
    null,
    [],
    t.tsInterfaceBody(bodyElements)
  );

  // Make the interface exportable
  return t.exportNamedDeclaration(interfaceDeclaration);
}

function createPropertySignature(
  ctx: SchemaTSContext,
  key: string,
  prop: JSONSchemaProperty,
  required: string[],
  schema: JSONSchema
): t.TSPropertySignature {

  const isIdent = isValidIdentifier(key);
  const name = ctx.options.useCamelCase ? toCamelCase(key) : key;
  const propType = getTypeForProp(ctx, prop, required, schema);
  const identifier = isIdent ? t.identifier(name) : t.stringLiteral(key);
  const propSig = t.tsPropertySignature(
    identifier,
    t.tsTypeAnnotation(propType)
  );
  propSig.optional = !required.includes(key);
  return propSig;
}


function getTypeForProp(ctx: SchemaTSContext, prop: JSONSchemaProperty, required: string[], schema: JSONSchema): t.TSType {
  if (prop.$ref) {
    return resolveRefType(ctx, prop.$ref, schema);
  }

  switch (prop.type) {
    case 'string':
      return t.tsStringKeyword();
    case 'number':
    case 'integer':
      return t.tsNumberKeyword();
    case 'boolean':
      return t.tsBooleanKeyword();
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
      // } else {
        // throw new Error('Object must have properties');
      } else {
        return t.tsAnyKeyword();  
      }
      break;
    default:
      return t.tsAnyKeyword();
  }
}

function resolveRefType(ctx: SchemaTSContext, ref: string, schema: JSONSchema): t.TSType {
  const path = ref.split('/');
  const definitionName = path.pop();
  if (definitionName && schema.$defs && schema.$defs[definitionName]) {
    return t.tsTypeReference(t.identifier(toPascalCase(definitionName)));
  }
  // now look in root
  if (definitionName && ctx.root.$defs && ctx.root.$defs[definitionName]) {
    return t.tsTypeReference(t.identifier(toPascalCase(definitionName)));
  }

  throw new Error(`Reference ${ref} not found in definitions.`);
}

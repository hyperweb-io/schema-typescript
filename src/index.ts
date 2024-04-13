// @ts-nocheck
import * as t from "@babel/types";
import generate from "@babel/generator";
import { toPascalCase } from "./utils";

interface JSONSchema {
  title: string;
  properties?: { [key: string]: JSONSchemaProperty };
  required?: string[];
  type?: string;
  items?: JSONSchema;
  $defs?: { [key: string]: JSONSchema };
}

type JSONSchemaProperty = {
  type?: string;
  properties?: { [key: string]: JSONSchemaProperty };
  items?: JSONSchemaProperty;
  required?: string[];
  $ref?: string;
};

interface SchemaTSOptions {
  useSingleQuotes: boolean;
}

interface SchemaTSContextI {
  options: SchemaTSOptions;
  root: JSONSchema;
  schema: JSONSchema;
  parents: JSONSchema[]
}


class SchemaTSContext implements SchemaTSContextI {
  options: SchemaTSOptions;
  root: JSONSchema;
  schema: JSONSchema;
  parents: JSONSchema[];

  constructor(
    options: SchemaTSOptions,
    root: JSONSchema,
    schema: JSONSchema,
    parents: JSONSchema[] = []
  ) {
    this.options = options;
    this.schema = schema;
    this.root = root;
    this.parents = parents;
  }

  // Clone the context with the option to add a new parent
  clone(newParent: JSONSchema): Context {
    // Create a new array for parents to avoid mutation of the original array
    const newParents = [...this.parents, newParent];
    return new SchemaTSContext(this.options, this.root, this.schema, newParents);
  }
}

const defaultOptions: SchemaTSOptions = { useSingleQuotes: true };

export function generateTypeScript(schema: JSONSchema, options?: SchemaTSOptions): string {
  const interfaces = [];
  const opts = options || defaultOptions;
  const ctx = new SchemaTSContext(opts, schema);

  try {

    // Process definitions first
    if (schema.$defs) {
      for (const key in schema.$defs) {
        // asset requires denom, but is also a definition.
        // maybe we just need to do a two-pass and register
        interfaces.push(createInterfaceDeclaration(ctx, toPascalCase(key), schema.$defs[key]));
      }
    }
  } catch (e) {
    console.error('Error processing interfaces');
    throw e;
  }
  // Process the main schema
  interfaces.push(createInterfaceDeclaration(ctx, toPascalCase(schema.title), schema));
  return generate(t.file(t.program(interfaces))).code;
}

function createInterfaceDeclaration(ctx: SchemaTSContext, name: string, schema: JSONSchema): t.TSInterfaceDeclaration {
  const properties = schema.properties || {};
  const required = schema.required || [];
  const body = Object.keys(properties).map(key => {
    const prop = properties[key];
    return createPropertySignature(ctx, key, prop, required, schema);
  });

  return t.tsInterfaceDeclaration(
    t.identifier(name),
    null,
    [],
    t.tsInterfaceBody(body)
  );
}

// Determine if the key is a valid JavaScript identifier
function isValidIdentifier(key) {
  return /^[$A-Z_][0-9A-Z_$]*$/i.test(key) && !/^[0-9]+$/.test(key);
}

function createPropertySignature(
  ctx: SchemaTSContext,
  key: string,
  prop: JSONSchemaProperty,
  required: string[],
  schema: JSONSchema
): t.TSPropertySignature {

  // Adjust the quoting style based on the useSingleQuotes flag
  function formatKey(ctx: SchemaTSContext) {
    const quote = ctx.options.useSingleQuotes ? "'" : '"';
    return `${quote}${key}${quote}`;
  }

  const propType = getTypeForProp(ctx, prop, required, schema);
  const identifier = isValidIdentifier(key) ? t.identifier(key) : t.stringLiteral(formatKey(ctx, key));
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
      } else {
        throw new Error('Object must have properties');
      }
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

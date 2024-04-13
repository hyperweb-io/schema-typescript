// @ts-nocheck
import * as t from "@babel/types";
import generate from "@babel/generator";

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

export function generateTypeScript(schema: JSONSchema): string {
  const interfaces = [];
  // Process definitions first
  if (schema.$defs) {
    for (const key in schema.$defs) {
      interfaces.push(createInterfaceDeclaration(toPascalCase(key), schema.$defs[key]));
    }
  }
  // Process the main schema
  interfaces.push(createInterfaceDeclaration(toPascalCase(schema.title), schema));
  return generate(t.file(t.program(interfaces))).code;
}

function createInterfaceDeclaration(name: string, schema: JSONSchema): t.TSInterfaceDeclaration {
  const properties = schema.properties || {};
  const required = schema.required || [];
  const body = Object.keys(properties).map(key => {
    const prop = properties[key];
    return createPropertySignature(key, prop, required, schema);
  });

  return t.tsInterfaceDeclaration(
    t.identifier(name),
    null,
    [],
    t.tsInterfaceBody(body)
  );
}

function createPropertySignature(
  key: string,
  prop: JSONSchemaProperty,
  required: string[],
  schema: JSONSchema,
  useSingleQuotes = false // Add a new parameter with a default value
): t.TSPropertySignature {
  // Helper function to determine if the key is a valid JavaScript identifier
  function isValidIdentifier(key) {
    return /^[$A-Z_][0-9A-Z_$]*$/i.test(key) && !/^[0-9]+$/.test(key);
  }

  // Adjust the quoting style based on the useSingleQuotes flag
  function formatKey(key) {
    const quote = useSingleQuotes ? "'" : '"';
    return `${quote}${key}${quote}`;
  }

  const propType = getTypeForProp(prop, required, schema);
  const identifier = isValidIdentifier(key) ? t.identifier(key) : t.stringLiteral(formatKey(key));
  const propSig = t.tsPropertySignature(
    identifier,
    t.tsTypeAnnotation(propType)
  );
  propSig.optional = !required.includes(key);
  return propSig;
}


function getTypeForProp(prop: JSONSchemaProperty, required: string[], schema: JSONSchema): t.TSType {
  if (prop.$ref) {
    return resolveRefType(prop.$ref, schema);
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
        return t.tsArrayType(getTypeForProp(prop.items, required, schema));
      } else {
        throw new Error('Array items specification is missing');
      }
    case 'object':
      if (prop.properties) {
        const nestedProperties = prop.properties;
        const nestedRequired = prop.required || [];
        const typeElements = Object.keys(nestedProperties).map(nestedKey => {
          const nestedProp = nestedProperties[nestedKey];
          return createPropertySignature(nestedKey, nestedProp, nestedRequired, schema);
        });
        return t.tsTypeLiteral(typeElements);
      } else {
        throw new Error('Object must have properties');
      }
    default:
      return t.tsAnyKeyword();
  }
}

function resolveRefType(ref: string, schema: JSONSchema): t.TSType {
  const path = ref.split('/');
  const definitionName = path.pop();
  if (definitionName && schema.$defs && schema.$defs[definitionName]) {
    return t.tsTypeReference(t.identifier(toPascalCase(definitionName)));
  }
  throw new Error(`Reference ${ref} not found in definitions.`);
}

function toPascalCase(str: string): string {
  return str.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase()).replace(/_/g, '');
}

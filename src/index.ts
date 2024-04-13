// @ts-nocheck
import * as t from "@babel/types";
import generate from "@babel/generator";

interface JSONSchema {
  title: string;
  properties?: { [key: string]: JSONSchemaProperty };
  required?: string[];
  type?: string;
  items?: JSONSchema;
}

type JSONSchemaProperty = {
  type: string;
  properties?: { [key: string]: JSONSchemaProperty };
  items?: JSONSchemaProperty;
  required?: string[];
};

export function generateTypeScript(schema: JSONSchema): string {
  const body: t.TSPropertySignature[] = [];

  if (schema.properties) {
    Object.keys(schema.properties).forEach(key => {
      const prop = schema.properties[key];
      const isOptional = schema.required ? !schema.required.includes(key) : true;
      body.push(t.tsPropertySignature(
        t.identifier(key),
        t.tsTypeAnnotation(getTypeForProp(prop, schema.required)),
        isOptional
      ));
    });
  }

  const interfaceDeclaration = t.tsInterfaceDeclaration(
    t.identifier(schema.title.replace(/\s+/g, '')),
    null,
    [],
    t.tsInterfaceBody(body)
  );

  return generate(interfaceDeclaration).code;
}

function getTypeForProp(prop: JSONSchemaProperty, required?: string[]): t.TSType {
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
        return t.tsArrayType(getTypeForProp(prop.items, required));
      } else {
        throw new Error('Array items specification is missing');
      }
    case 'object':
      if (prop.properties) {
        // Create type literals for nested objects
        const properties = prop.properties;
        const typeElements: t.TSTypeElement[] = Object.keys(properties).map(key => {
          const nestedProp = properties[key];
          const isOptional = nestedProp.required ? !nestedProp.required.includes(key) : true;
          return t.tsPropertySignature(
            t.identifier(key),
            t.tsTypeAnnotation(getTypeForProp(nestedProp, nestedProp.required)),
            isOptional
          );
        });
        return t.tsTypeLiteral(typeElements);
      } else {
        throw new Error('Object must have properties');
      }
    default:
      return t.tsAnyKeyword();
  }
}

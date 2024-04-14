export interface JSONSchema {
  title: string;
  properties?: { [key: string]: JSONSchemaProperty };
  required?: string[];
  type?: string;
  items?: JSONSchema;
  $defs?: { [key: string]: JSONSchema };
  additionalProperties?: boolean | JSONSchemaProperty;
}

export type JSONSchemaProperty = {
  type?: string;
  properties?: { [key: string]: JSONSchemaProperty };
  items?: JSONSchemaProperty;
  required?: string[];
  $ref?: string;
  additionalProperties?: boolean | JSONSchemaProperty;
};

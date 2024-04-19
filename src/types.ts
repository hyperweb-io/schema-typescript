export interface JSONSchema {
  $ref?: string;
  title?: string;
  properties?: { [key: string]: JSONSchema };
  required?: string[];
  type?: string;
  const?: string;
  enum?: string[];
  items?: JSONSchema;
  $defs?: { [key: string]: JSONSchema };  // (JSON Schema Draft 2019-09 and later)
  definitions?: { [key: string]: JSONSchema }; // (JSON Schema Draft-04 to Draft-07)
  additionalProperties?: boolean | JSONSchema;
  anyOf?: JSONSchema[];
  allOf?: JSONSchema[];
  oneOf?: JSONSchema[];
  description?: string;
  default?: any;
  format?: string;
}
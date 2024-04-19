export interface JSONSchema {
  $ref?: string;
  title?: string;
  properties?: { [key: string]: JSONSchema };
  required?: string[];
  type?: string;
  enum?: string[];
  items?: JSONSchema;
  $defs?: { [key: string]: JSONSchema };
  additionalProperties?: boolean | JSONSchema;
}
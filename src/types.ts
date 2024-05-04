export interface JSONSchema {
  $schema?: string;
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

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
      ? Array<DeepPartial<U>> // If it's an array, make each element a DeepPartial
      : T[P] extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>> // Handle readonly arrays
      : T[P] extends object
      ? DeepPartial<T[P]> // Apply DeepPartial recursively if it's an object
      : T[P]; // Otherwise, just make it optional
};

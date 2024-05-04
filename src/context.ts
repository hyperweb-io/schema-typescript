import deepmerge from 'deepmerge';

import type { JSONSchema } from "./types";

export interface SchemaDefinitionOverrides {
  [key: string]: JSONSchema
}
export interface SchemaTSOptions {
  useSingleQuotes: boolean;
  camelCase?: boolean; // defaults to false
  camelCaseFn?: (str: string) => string; // optional function to convert keys to camelCase
  strictTypeSafety: boolean;  // true uses { [k: string]: unknown; }, false uses any
  overrides?: SchemaDefinitionOverrides;
}

export interface SchemaTSContextI {
  options: SchemaTSOptions;
  root: JSONSchema;
  schema: JSONSchema;
  parents: JSONSchema[]
}


export class SchemaTSContext implements SchemaTSContextI {
  options: SchemaTSOptions;
  root: JSONSchema;
  schema: JSONSchema;
  parents: JSONSchema[];

  constructor(
    options: Partial<SchemaTSOptions>,
    root: JSONSchema,
    schema: JSONSchema,
    parents: JSONSchema[] = []
  ) {
    this.options = deepmerge(defaultOptions, options ?? {});
    this.schema = schema;
    this.root = root;
    this.parents = parents;
  }

  // (currently not used)
  // Clone the context with the option to add a new parent
  clone(newParent: JSONSchema): SchemaTSContext {
    // Create a new array for parents to avoid mutation of the original array
    const newParents = [...this.parents, newParent];
    return new SchemaTSContext(this.options, this.root, this.schema, newParents);
  }
}

export const defaultOptions: SchemaTSOptions = { 
  useSingleQuotes: true, 
  camelCase: false,
  camelCaseFn: null,
  strictTypeSafety: true
};

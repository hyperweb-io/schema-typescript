import type { JSONSchema } from "./types";

export interface SchemaTSOptions {
  useSingleQuotes: boolean;
  useCamelCase: boolean;
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
  clone(newParent: JSONSchema): SchemaTSContext {
    // Create a new array for parents to avoid mutation of the original array
    const newParents = [...this.parents, newParent];
    return new SchemaTSContext(this.options, this.root, this.schema, newParents);
  }
}

export const defaultOptions: SchemaTSOptions = { useSingleQuotes: true, useCamelCase: false };

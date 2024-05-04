import deepmerge from 'deepmerge';

import type { DeepPartial, JSONSchema } from "./types";

export interface SchemaDefinitionOverrides {
  [key: string]: JSONSchema
}

export interface SchemaNamingStrategy {
  useLastSegment?: boolean;
  prefixStrip?: string | RegExp;
  renameMap?: { [originalName: string]: string };
}
export interface SchemaTSOptions {
  useSingleQuotes: boolean;
  camelCase?: boolean; // defaults to false
  camelCaseFn?: (str: string) => string; // optional function to convert keys to camelCase
  strictTypeSafety: boolean;  // true uses { [k: string]: unknown; }, false uses any
  overrides?: SchemaDefinitionOverrides;
  
  includeTypeComments?: boolean;
  includePropertyComments?: boolean;
  includeMethodComments?: boolean;

  namingStrategy?: SchemaNamingStrategy;

  // Include/Exclude types
  include?: string[];
  exclude?: string[];
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
    this.options = getDefaultSchemaTSOptions(options);
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

export const defaultSchemaTSOptions: SchemaTSOptions = { 
  useSingleQuotes: true, 
  camelCase: false,
  camelCaseFn: null,
  strictTypeSafety: true,
  exclude: [],
  include: [],
  includePropertyComments: false,
  includeMethodComments: false,
  includeTypeComments: false,
  namingStrategy: {
    useLastSegment: true
  }
};

export const getDefaultSchemaTSOptions = (options?: DeepPartial<SchemaTSOptions>): SchemaTSOptions => {
  return deepmerge(defaultSchemaTSOptions, options ?? {}) as SchemaTSOptions;
};

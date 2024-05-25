import deepmerge from 'deepmerge';
import type { DeepPartial } from 'schema-typescript';
import { defaultSchemaTSOptions, SchemaTSOptions } from 'schema-typescript';

export interface OpenAPIOptions extends SchemaTSOptions {
    version?: 'v1' | 'v1beta1' | 'v2beta1' | 'v2beta2';
    mergedParams?: boolean;
    paths?: {
        // Include/Exclude types
        include?: string[];
        exclude?: string[];

        includeTags?: string[];
        excludeTags?: string[];

        includeRequests?: string[];
        excludeRequests?: string[];
    }
}

export const defaultSchemaSDKOptions: OpenAPIOptions = {
  ...defaultSchemaTSOptions,
  mergedParams: false,
  paths: {
    include: [],
    exclude: [],
    includeTags: [],
    excludeTags: [],
    includeRequests: [],
    excludeRequests: []
  }
};

export const getDefaultSchemaSDKOptions = (options?: DeepPartial<SchemaTSOptions>): SchemaTSOptions => {
  return deepmerge(defaultSchemaSDKOptions, options ?? {}) as SchemaTSOptions;
};


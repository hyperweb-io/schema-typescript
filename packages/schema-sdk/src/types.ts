import deepmerge from 'deepmerge';
import type { DeepPartial } from 'schema-typescript';
import { defaultSchemaTSOptions, SchemaTSOptions } from 'schema-typescript';

export interface OpenAPIOptions extends SchemaTSOptions {
  clientName: string;
  version?: 'v1' | 'v1beta1' | 'v2beta1' | 'v2beta2';
  npmApiClient?: '@interweb/fetch-api-client' | '@interweb/node-api-client' | string;
  mergedParams?: boolean;
  includeSwaggerUrl?: boolean;
  operationNamingStrategy?: {
    renameTypes?: boolean;
    renameMap?: {
      [originalName: string]: string;
    };
    aliases?: {
      [originalName: string]: string;
    };
  };
  paths?: {
    // Include/Exclude types
    include?: string[];
    exclude?: string[];

    includeTags?: string[];
    excludeTags?: string[];

    includeRequests?: string[];
    excludeRequests?: string[];
  };
}

export const defaultSchemaSDKOptions: Partial<OpenAPIOptions> = {
  ...defaultSchemaTSOptions,
  clientName: 'Client',
  npmApiClient: '@interweb/fetch-api-client',
  mergedParams: false,
  includeSwaggerUrl: false,
  operationNamingStrategy: {
    renameMap: {},
    aliases: {},
  },
  paths: {
    include: [],
    exclude: [],
    includeTags: [],
    excludeTags: [],
    includeRequests: [],
    excludeRequests: [],
  },
};

export const getDefaultSchemaSDKOptions = (
  options?: DeepPartial<OpenAPIOptions>
): OpenAPIOptions => {
  return deepmerge(defaultSchemaSDKOptions, options ?? {}) as OpenAPIOptions;
};

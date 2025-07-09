import deepmerge from 'deepmerge';
import type { DeepPartial } from 'schema-typescript';
import { defaultSchemaTSOptions, SchemaTSOptions } from 'schema-typescript';
import type { Operation } from 'fast-json-patch';

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
  hooks?: {
    enabled?: boolean;
    /**
     * Custom hook name for context, e.g. useKubernetes
     */
    contextHookName?: string;
    /**
     * Import path for the context hook, e.g. '../contexts/KubernetesContext'
     */
    contextImportPath: string;

    typesImportPath: string; // kubernetesjs, ./swagger-client, etc. 
  };
  /**
   * JSON Patch operations to apply to the OpenAPI spec before processing
   * Uses RFC 6902 JSON Patch format
   * @see https://www.npmjs.com/package/fast-json-patch
   */
  jsonpatch?: Operation[];
}

export const defaultSchemaSDKOptions: DeepPartial<OpenAPIOptions> = {
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
  hooks: {
    enabled: false,
    typesImportPath: './client',
    contextHookName: './context'
  },
  jsonpatch: [],
};

export const getDefaultSchemaSDKOptions = (
  options?: DeepPartial<OpenAPIOptions>
): OpenAPIOptions => {
  return deepmerge(defaultSchemaSDKOptions, options ?? {}) as OpenAPIOptions;
};

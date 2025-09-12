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
  /**
   * Emit a compact Group/Version/Kind → Operations index.
   * This is a lightweight registry mapping each GVK to the generated
   * KubernetesClient method names and request type names.
   */
  opsIndex?: {
    enabled?: boolean;
    /**
     * Optional import path to bring in resource TS types so we can emit a
     * ResourceTypeMap keyed by GVKKey. If omitted, only string type names
     * are embedded in the data and no type map is generated.
     * Example: './swagger-extended-client'
     */
    typesImportPath?: string;
    /**
     * Normalize empty group to this label for keys. Default: 'core'.
     */
    emptyGroupLabel?: string;
  };
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
  opsIndex: {
    enabled: false,
    emptyGroupLabel: 'core',
  },
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

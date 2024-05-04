import { JSONSchema } from "./types";

export interface OpenAPISpec {
    swagger: string;
    info: Info;
    host?: string;
    basePath?: string;
    schemes?: string[];
    consumes?: string[];
    produces?: string[];
    paths: { [path: string]: OpenAPIPathItem };
    definitions?: { [key: string]: JSONSchema };
    parameters?: { [key: string]: Parameter };
    responses?: { [key: string]: Response };
    securityDefinitions?: { [key: string]: SecurityDefinition };
    security?: SecurityRequirement[];
    tags?: Tag[];
    externalDocs?: ExternalDocumentation;
}


interface SecurityDefinition {
    type: 'basic' | 'apiKey' | 'oauth2';
    description?: string;
    name?: string;  // for apiKey
    in?: 'header' | 'query';  // for apiKey
    flow?: 'implicit' | 'password' | 'application' | 'accessCode';  // for oauth2
    authorizationUrl?: string;  // for oauth2
    tokenUrl?: string;  // for oauth2
    scopes?: { [scopeName: string]: string };  // for oauth2
}

interface SecurityRequirement {
    [name: string]: string[];
}

export interface Info {
    title: string;
    description?: string;
    termsOfService?: string;
    contact?: Contact;
    license?: License;
    version: string;
}

export interface Contact {
    name?: string;
    url?: string;
    email?: string;
}

export interface License {
    name: string;
    url?: string;
}

export interface Tag {
    name: string;
    description?: string;
    externalDocs?: ExternalDocumentation;
}

export interface ExternalDocumentation {
    description?: string;
    url: string;
}


export interface OpenAPIPathItem {
    description?: string;
    summary?: string;
    get?: Operation;
    put?: Operation;
    post?: Operation;
    delete?: Operation;
    options?: Operation;
    head?: Operation;
    patch?: Operation;
    parameters?: Parameter[];
}

export interface Operation {
    description?: string;
    summary?: string;
    operationId?: string;
    consumes?: string[];
    produces?: string[];
    tags?: string[];
    schemes?: string[];
    responses: { [statusCode: string]: Response };
    parameters?: Parameter[];
}

export interface Items {
    type: string;
    format?: string;
    items?: Items; // For nested array types
    collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi';
    default?: any;
    enum?: any[];
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    multipleOf?: number;
}

export interface Parameter {
    name: string;
    in: 'query' | 'header' | 'path' | 'formData' | 'body';
    description?: string;
    required?: boolean;
    type?: string;
    schema?: Schema;
    format?: string;
    allowEmptyValue?: boolean;
    items?: Items;
    collectionFormat?: string;
    default?: any;
    maximum?: number;
    exclusiveMaximum?: boolean;
    minimum?: number;
    exclusiveMinimum?: boolean;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    maxItems?: number;
    minItems?: number;
    uniqueItems?: boolean;
    enum?: string[];
    multipleOf?: number;
}

export interface Response {
    description: string;
    schema?: Schema;
}

export interface Schema {
    $ref?: string;
    type?: string;
    items?: Schema;
}

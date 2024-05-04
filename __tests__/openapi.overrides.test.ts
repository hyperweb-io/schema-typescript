import { writeFileSync } from 'fs';

import schema from '../__fixtures__/openapi/swagger.json';
import { generateTypeScript } from '../src';

const myschema = {
    title: 'Kubernetes',
    definitions: schema.definitions
};

const overrides = {
    'io.k8s.apimachinery.pkg.util.intstr.IntOrString': {
        "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "string",
            }
        ]
    },
    'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps': {
        "anyOf": [
            {
              "type": "object",
              "properties": {
                // Define the properties of JSONSchemaProps here
                "title": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                }
              },
              "required": ["title", "type"],
              "additionalProperties": true
            },
            {
              "type": "array",
              "items": {
                "type": "object"
              }
            }
        ]
    },
    'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrBool': {
        "anyOf": [
            {
              "type": "object",
              "properties": {
                // Define the properties of JSONSchemaProps here
                "title": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                }
              },
              "required": ["title", "type"],
              "additionalProperties": true
            },
            {
              "type": "boolean"
            }
        ]
    },
    'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaPropsOrStringArray': {
        "anyOf": [
            {
              "type": "object",
              "properties": {
                // Define the properties of JSONSchemaProps here
                "title": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                }
              },
              "required": ["title", "type"],
              "additionalProperties": true
            },
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
        ]
    },
    'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON': {
        "type": "object"
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.Time': {
        "type": "object"
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime': {
        "type": "object"
    },
    'io.k8s.apimachinery.pkg.api.resource.Quantity': {
        "type": "object"
    }
};

it('useLastSegment false', () => {
    const code = generateTypeScript(myschema as any, {
        overrides,
        includeTypeComments: true,
        namingStrategy: {
          useLastSegment: false
        }
    });
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/swagger.overrides.all.ts', code);
});

it('useLastSegment true', () => {
    const code = generateTypeScript(myschema as any, {
        overrides,
        includeTypeComments: true,
        namingStrategy: {
          useLastSegment: true
        }
    });
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/swagger.overrides.last.ts', code);
});

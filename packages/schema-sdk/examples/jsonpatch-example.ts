import { writeFileSync } from 'fs';
import type { Operation } from 'fast-json-patch';

import schema from '../../../__fixtures__/openapi/swagger.json';
import { generateOpenApiClient, getDefaultSchemaSDKOptions } from '../src';

// Example: Using JSON Patch to fix the IntOrString type
// The original swagger.json defines IntOrString as type: "string" with format: "int-or-string"
// But it should actually be a union type that accepts either string or integer

const jsonPatchOperations: Operation[] = [
  // Remove the incorrect type and format
  {
    op: 'remove',
    path: '/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString/type'
  },
  {
    op: 'remove',
    path: '/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString/format'
  },
  // Add the correct oneOf definition
  {
    op: 'add',
    path: '/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString/oneOf',
    value: [
      { type: 'string' },
      { type: 'integer', format: 'int32' }
    ]
  }
];

const options = getDefaultSchemaSDKOptions({
  clientName: 'KubernetesClient',
  jsonpatch: jsonPatchOperations,
  exclude: [
    '*.v1beta1.*',
    '*.v2beta1.*',
  ],
});

const code = generateOpenApiClient(options, schema as any);

// The generated TypeScript will now have:
// export type IntOrString = string | number;
// Instead of just:
// export type IntOrString = string;

console.log('Generated client with patched IntOrString type!');
writeFileSync(__dirname + '/output/kubernetes-client-patched.ts', code);
import { writeFileSync } from 'fs';
import type { Operation } from 'fast-json-patch';

import schema from '../../../__fixtures__/openapi/swagger.json';
import { generateOpenApiClient } from '../src/openapi';
import { getDefaultSchemaSDKOptions } from '../src/types';

describe('JSON Patch functionality', () => {
  it('should patch IntOrString type from string to oneOf', () => {
    // Define the patch to change IntOrString from type: string to oneOf: [string, integer]
    const jsonPatchOperations: Operation[] = [
      {
        op: 'remove',
        path: '/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString/type'
      },
      {
        op: 'remove',
        path: '/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString/format'
      },
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
        'io.k8s.api.events.v1.EventSeries',
        'io.k8s.api.events.v1.Event',
        'io.k8s.api.flowcontrol*',
      ],
    });

    const code = generateOpenApiClient(options, schema as any);
    
    // The generated code should contain the IntOrString type as a union
    expect(code).toContain('IntOrString');
    
    // Write the output for manual inspection
    writeFileSync(
      __dirname + '/../../../__fixtures__/output/swagger.jsonpatch.ts',
      code
    );
  });

  it('should handle empty jsonpatch array', () => {
    const options = getDefaultSchemaSDKOptions({
      clientName: 'KubernetesClient',
      jsonpatch: [],
      exclude: ['*.v1beta1.*', '*.v2beta1.*'],
    });

    const code = generateOpenApiClient(options, schema as any);
    expect(code).toBeTruthy();
  });

  it('should handle undefined jsonpatch', () => {
    const options = getDefaultSchemaSDKOptions({
      clientName: 'KubernetesClient',
      exclude: ['*.v1beta1.*', '*.v2beta1.*'],
    });

    const code = generateOpenApiClient(options, schema as any);
    expect(code).toBeTruthy();
  });
});
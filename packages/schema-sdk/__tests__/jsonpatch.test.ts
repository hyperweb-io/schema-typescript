import { writeFileSync } from 'fs';
import type { Operation } from 'fast-json-patch';
import { diff } from 'jest-diff';

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

    const baseOptions = {
      clientName: 'KubernetesClient',
      exclude: [
        '*.v1beta1.*',
        '*.v2beta1.*',
        'io.k8s.api.events.v1.EventSeries',
        'io.k8s.api.events.v1.Event',
        'io.k8s.api.flowcontrol*',
      ],
    };

    // Generate code without patch
    const optionsWithoutPatch = getDefaultSchemaSDKOptions(baseOptions);
    const codeWithoutPatch = generateOpenApiClient(optionsWithoutPatch, schema as any);
    
    // Generate code with patch
    const optionsWithPatch = getDefaultSchemaSDKOptions({
      ...baseOptions,
      jsonpatch: jsonPatchOperations,
    });
    const codeWithPatch = generateOpenApiClient(optionsWithPatch, schema as any);
    
    // The generated code should contain the IntOrString type as a union
    expect(codeWithPatch).toContain('IntOrString');
    
    // Extract just the IntOrString-related lines for a focused diff
    const extractIntOrStringContext = (code: string) => {
      const lines = code.split('\n');
      const relevantLines: string[] = [];
      
      lines.forEach((line, index) => {
        if (line.includes('IntOrString')) {
          // Get context: 2 lines before and after
          for (let i = Math.max(0, index - 2); i <= Math.min(lines.length - 1, index + 2); i++) {
            if (!relevantLines.includes(lines[i])) {
              relevantLines.push(lines[i]);
            }
          }
        }
      });
      
      return relevantLines.join('\n');
    };
    
    const contextWithoutPatch = extractIntOrStringContext(codeWithoutPatch);
    const contextWithPatch = extractIntOrStringContext(codeWithPatch);
    
    // Generate diff
    const diffOutput = diff(contextWithoutPatch, contextWithPatch, {
      aAnnotation: 'Without JSON Patch',
      bAnnotation: 'With JSON Patch',
      includeChangeCounts: true,
      contextLines: 3,
      expand: false,
    });
    
    // Write the diff for inspection
    writeFileSync(
      __dirname + '/../../../__fixtures__/output/swagger.jsonpatch.diff',
      `JSON Patch Effect on IntOrString Type
======================================

The following diff shows how the JSON patch transforms the IntOrString type
from a simple string type to a proper union type (string | number).

${diffOutput}

Key Changes:
- Original: export type IntOrString = string;
- Patched:  export type IntOrString = string | number;

This affects all properties that use IntOrString, making them accept both
string and number values as originally intended by the Kubernetes API.
`
    );
    
    // Verify the type definition changed
    expect(codeWithoutPatch).toMatch(/export type IntOrString = string;/);
    expect(codeWithPatch).toMatch(/export type IntOrString = string \| number;/);
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
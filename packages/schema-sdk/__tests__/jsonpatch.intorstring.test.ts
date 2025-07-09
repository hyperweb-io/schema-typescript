import { readFileSync } from 'fs';
import type { Operation } from 'fast-json-patch';
import * as jsonpatch from 'fast-json-patch';

import schema from '../../../__fixtures__/openapi/swagger.json';

describe('IntOrString JSON Patch fix', () => {
  it('should verify the original IntOrString is type string', () => {
    const originalDef = (schema as any).definitions['io.k8s.apimachinery.pkg.util.intstr.IntOrString'];
    expect(originalDef.type).toBe('string');
    expect(originalDef.format).toBe('int-or-string');
    expect(originalDef.oneOf).toBeUndefined();
  });

  it('should patch IntOrString to use oneOf', () => {
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

    // Apply patches
    const schemaCopy = JSON.parse(JSON.stringify(schema));
    const result = jsonpatch.applyPatch(schemaCopy, jsonPatchOperations);
    
    const patchedDef = result.newDocument.definitions['io.k8s.apimachinery.pkg.util.intstr.IntOrString'];
    
    // Verify the patch worked
    expect(patchedDef.type).toBeUndefined();
    expect(patchedDef.format).toBeUndefined();
    expect(patchedDef.oneOf).toEqual([
      { type: 'string' },
      { type: 'integer', format: 'int32' }
    ]);
    expect(patchedDef.description).toBe('IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.');
  });
});
import schema from '../../../__fixtures__/openapi/swagger.json';
import { defaultSchemaSDKOptions } from '../src/types';
import { generateReactQueryHooks } from '../src/openapi';
import { writeFileSync } from 'fs';
import { OpenAPIOptions } from '../dist';

/**
 * Return a new schema object filtered to only include the given paths.
 */
function getFilteredSchema(schema: any, patterns: string[]): any {
  const filteredPaths = Object.fromEntries(
    Object.entries(schema.paths).filter(([p]) => patterns.includes(p))
  );
  return { ...schema, paths: filteredPaths } as any;
}

describe('generateReactQueryHooks', () => {
  it('returns empty array when hooks are disabled', () => {
    const hooks = generateReactQueryHooks(defaultSchemaSDKOptions as any, schema as any);
    expect(hooks).toEqual([]);
  });

  it('returns hook files when enabled for filtered schema', () => {
    const options: OpenAPIOptions = {
      ...(defaultSchemaSDKOptions as any),
      hooks: { 
        enabled: true,
        path: 'hooks',
        typesImportPath: './swagger-client',
        contextImportPath: './k8s-context',
      },
    } as any;
    // const testSchema = getFilteredSchema(schema as any, patterns);
    const testSchema = schema as any;
    const hooks = generateReactQueryHooks(options, testSchema);
    expect(hooks.length).toBeGreaterThan(0);
    // Verify each hook file has expected properties
    hooks.forEach(hook => {
      expect(hook).toHaveProperty('fileName');
      expect(hook).toHaveProperty('code');
    });

    writeFileSync(
      __dirname + '/../../../__fixtures__/output/hooks.ts',
      hooks[0].code
    );
  });
}); 
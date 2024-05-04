import { writeFileSync } from 'fs';

import schema from '../__fixtures__/openapi/swagger.json';
import { getDefaultSchemaTSOptions } from '../src';
import { generateOpenApiClient } from '../src/openapi';

it('swagger', () => {
    const options = getDefaultSchemaTSOptions({
        // include: [
        //     '*.v1.*'
        // ],
        includeMethodComments: true,
        namingStrategy: {
            useLastSegment: true
        }
    })
    const code = generateOpenApiClient({
        ...options,
        version: 'v1',
        mergedParams: false
    }, schema as any);
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/swagger-client.ts', code);
});

it('merged', () => {
    const options = getDefaultSchemaTSOptions({
        // include: [
        //     '*.v1.*'
        // ],
        includeMethodComments: true,
        namingStrategy: {
            useLastSegment: true
        }
    })
    const code = generateOpenApiClient({
        ...options,
        version: 'v1',
        mergedParams: true
    }, schema as any);
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/swagger-client.merged.ts', code);
});

it('openapi', () => {
    const data = Object.keys(schema.definitions)
    writeFileSync(__dirname + '/../__fixtures__/output/swagger-definitions.json', JSON.stringify(data, null, 2));
});
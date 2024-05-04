import { writeFileSync } from 'fs';

import schema from '../__fixtures__/openapi/swagger.json';
import { generateOpenApiClient } from '../src/openapi';

it('swagger', () => {
    const code = generateOpenApiClient(schema as any);
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/swagger-client.ts', code);
});

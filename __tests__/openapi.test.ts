import { writeFileSync } from 'fs';

import schema from '../__fixtures__/openapi/swagger.json';
import { generateTypeScript } from '../src';

const myschema = {
    title: 'Kubernetes',
    definitions: schema.definitions
};

it('swagger', () => {
    const code = generateTypeScript(myschema as any, {
        
    });
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/swagger.ts', code);
});

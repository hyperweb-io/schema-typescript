import { writeFileSync } from 'fs';

import schema from '../__fixtures__/schemas/contract.json';
import { generateTypeScript } from '../src';

it('contract', () => {
    const code = generateTypeScript(schema as any);
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/contract.ts', code);
});

it('contract camelCase', () => {
    const code = generateTypeScript(schema as any, {
        useSingleQuotes: true,
        camelCase: true
    });
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/contract.camel.ts', code);
});

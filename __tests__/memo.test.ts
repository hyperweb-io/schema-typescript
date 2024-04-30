import { writeFileSync } from 'fs';

import schema from '../__fixtures__/schemas/memo.json';
import { generateTypeScript } from '../src';

it('memo', () => {
    const code = generateTypeScript(schema as any);
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/memo.ts', code);
});

it('memo camelCase', () => {
    const code = generateTypeScript(schema as any, {
        useSingleQuotes: true,
        camelCase: true
    });
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/memo.camel.ts', code);
});

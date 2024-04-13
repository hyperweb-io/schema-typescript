import { writeFileSync } from 'fs';

import schema from '../__fixtures__/schemas/chain.json';
import { generateTypeScript } from '../src';

it('chain', () => {
    const code = generateTypeScript(schema as any);
    expect(code).toMatchSnapshot();
    writeFileSync(__dirname + '/../__fixtures__/output/chain.ts', code);
});

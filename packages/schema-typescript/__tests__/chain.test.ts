import { writeFileSync } from 'fs';

import schema from '../../../__fixtures__/schemas/chain.json';
import { generateTypeScript } from '../src';

it('chain', () => {
  const code = generateTypeScript(schema as any);
  expect(code).toMatchSnapshot();
  writeFileSync(__dirname + '/../../../__fixtures__/output/chain.ts', code);
});

it('chain camelCase', () => {
  const code = generateTypeScript(schema as any, {
    useSingleQuotes: true,
    camelCase: true
  });
  expect(code).toMatchSnapshot();
  writeFileSync(__dirname + '/../../../__fixtures__/output/chain.camel.ts', code);
});

import { writeFileSync } from 'fs';

import schema from '../../../__fixtures__/schemas/assetlist.json';
import { generateTypeScript } from '../src';

it('assetlist', () => {
  const code = generateTypeScript(schema as any);
  expect(code).toMatchSnapshot();
  writeFileSync(__dirname + '/../../../__fixtures__/output/assetlist.ts', code);
});

it('assetlist camelCase', () => {
  const code = generateTypeScript(schema as any, {
    useSingleQuotes: true,
    camelCase: true,
  });
  expect(code).toMatchSnapshot();
  writeFileSync(
    __dirname + '/../../../__fixtures__/output/assetlist.camel.ts',
    code
  );
});

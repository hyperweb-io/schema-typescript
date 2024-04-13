import chain from '../__fixtures__/schemas/chain.json';
import { generateTypeScript } from '../src';
it('chain', () => {
    expect(generateTypeScript(chain as any)).toMatchSnapshot();
});

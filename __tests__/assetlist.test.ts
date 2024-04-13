import assetlist from '../__fixtures__/schemas/assetlist.json';
import { generateTypeScript } from '../src';
it('assetlist', () => {
    expect(generateTypeScript(assetlist as any)).toMatchSnapshot();
});

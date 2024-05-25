import { generateTypeScript } from '../src';

it('const', () => {
  expect(generateTypeScript({
    $id: 'https://example.com/person.schema.json',
    $schema: 'https://json-schema.org/draft-07/schema#',
    title: 'Person',
    type: 'object',
    properties: {
      firstName: {
        const: 'Dan'
      },
      age: {
        type: 'integer'
      }
    },
    required: ['firstName', 'age'],
    additionalProperties: true
  } as any)).toMatchSnapshot()
})

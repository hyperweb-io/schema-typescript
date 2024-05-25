import { generateTypeScript } from '../src';

const schema = {
  $id: 'https://example.com/person.schema.json',
  $schema: 'https://json-schema.org/draft-07/schema#',
  title: 'Person',
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    age: {
      type: 'integer',
    },
    dog: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        breed: {
          type: 'string',
        },
        age: {
          type: 'integer',
        },
      },
      required: ['name', 'breed'],
    },
  },
  required: ['lastName', 'age', 'dog'],
};

it('works', () => {
  expect(generateTypeScript(schema)).toMatchSnapshot();
});

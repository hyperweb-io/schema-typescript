import { generateTypeScript } from '../src';

it('additional', () => {
  expect(generateTypeScript({
    $id: 'https://example.com/person.schema.json',
    $schema: 'https://json-schema.org/draft-07/schema#',
    title: 'Person',
    type: 'object',
    properties: {
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      age: {
        type: 'integer'
      }
    },
    required: ['firstName', 'lastName'],
    additionalProperties: true
  } as any)).toMatchSnapshot();
});

it('additional', () => {
  expect(generateTypeScript({
    title: 'Person',
    type: 'object',
    properties: {
      firstName: {
        type: 'string'
      }
    },
    required: ['firstName'],
    additionalProperties: {
      title: 'Car',
      type: 'object',
      properties: {
        newProp: {
          type: 'Person'
        }
      },
      required: ['newProp'],
      additionalProperties: true
    }
  } as any)).toMatchSnapshot();
});
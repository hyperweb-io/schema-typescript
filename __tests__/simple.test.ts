import { generateTypeScript } from '../src';

const exampleSchema = {
 "$id": "https://example.com/person.schema.json",
 "$schema": "https://json-schema.org/draft-07/schema#",
 "title": "Person",
 "type": "object",
 "properties": {
  "firstName": {
   "type": "string"
  },
  "lastName": {
   "type": "string"
  },
  "age": {
   "type": "integer"
  }
 },
 "required": ["firstName", "lastName"]
};

it('works', () => {
 expect(generateTypeScript(exampleSchema)).toMatchSnapshot()
})

import { generateTypeScript } from '../src';

const exampleSchema = {
    "$id": "https://example.com/person.schema.json",
    "$schema": "https://json-schema.org/draft-07/schema#",
    "title": "Person",
    "type": "object",
    "properties": {
        "firstName": { "type": "string" },
        "pets": {
            "type": "array",
            "items": { "$ref": "#/$defs/pet" }
        }
    },
    "required": ["firstName", "pets"],
    "$defs": {
        "pet": {
            "type": "object",
            "properties": {
                "name": { "type": "string" },
                "type": { "type": "string" }  // Indicates whether the pet is a dog, cat, etc.
            },
            "required": ["name", "type"]
        }
    }
};

it('works', () => {
    expect(generateTypeScript(exampleSchema as any)).toMatchSnapshot();
});

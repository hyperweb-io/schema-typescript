import { generateTypeScript } from '../src';

const schema = {
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
        },
        "dogs": {  // Updated to be an array of dogs
            "type": "array",
            "items": {
                "$ref": "#/$defs/dog"
            }
        },
        "cats": {  // Added an array of cats
            "type": "array",
            "items": {
                "$ref": "#/$defs/cat"
            }
        }
    },
    "required": ["lastName", "age", "dogs", "cats"],
    "$defs": {
        "dog": { // Defining dog as a reusable schema
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "breed": {
                    "type": "string"
                },
                "age": {
                    "type": "integer"
                }
            },
            "required": ["name", "breed"]
        },
        "cat": { // Defining cat as a reusable schema
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "color": {
                    "type": "string"
                },
                "age": {
                    "type": "integer"
                }
            },
            "required": ["name", "color"]
        }
    }
};

it('works', () => {
    expect(generateTypeScript(schema as any)).toMatchSnapshot();
});

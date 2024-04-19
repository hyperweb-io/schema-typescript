import { generateTypeScript } from '../src';

const schema = {
    "$id": "https://example.com/person.schema.json",
    "$schema": "https://json-schema.org/draft-07/schema#",
    "title": "Person",
    "type": "object",
    "properties": {
        "traces": {
            "type": "array",
            "description": "The origin of the asset, capturing all transitions in form and location.",
            "items": {
                "anyOf": [
                    { "$ref": "#/$defs/dog" },
                    { "$ref": "#/$defs/cat" }
                ]
            },
            "minContains": 1
        },
        "profile": {
            "allOf": [
                { "$ref": "#/$defs/dog" },
                {
                    "type": "object",
                    "properties": {
                        "microchipped": {
                            "type": "boolean"
                        }
                    }
                }
            ]
        },
        "identity": {
            "oneOf": [
                {
                    "type": "object",
                    "properties": {
                        "passportNumber": {
                            "type": "string"
                        }
                    }
                },
                {
                    "type": "object",
                    "properties": {
                        "driverLicense": {
                            "type": "string"
                        }
                    }
                }
            ]
        }
    },
    "$defs": {
        "dog": {
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
        "cat": {
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
        }
    }
};

it('works', () => {
    expect(generateTypeScript(schema as any)).toMatchSnapshot();
});

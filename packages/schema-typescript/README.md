# schema-typescript 

<p align="center" width="100%">
  <a href="https://github.com/cosmology-tech/schema-typescript/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/cosmology-tech/schema-typescript/actions/workflows/run-tests.yaml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/schema-typescript/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"/></a>
</p>

Welcome to _schema-typescript_! This project provides robust tools for handling JSON schemas and converting them to TypeScript interfaces with ease and efficiency.

## Features 

- **🔧 JSON Schema to TypeScript**: Convert JSON schemas into TypeScript interfaces automatically.

- **📦 Modular**: Designed to be reusable with minimal dependencies.

- **🔍 Supports `$ref` and `$defs`**: Fully supports JSON Schema references, allowing you to define complex schemas modularly.

- **🐕 Multiple Entities Handling**: Handles arrays of defined types, such as multiple dogs or cats, seamlessly in your schemas.

## Getting Started 🏁

To get started with _schema-typescript_, simply run:

```bash
npm install schema-typescript
```

## Usage 📘

Here's a quick example to show you how to convert a JSON schema into TypeScript interfaces:

```javascript
import { generateTypeScript } from 'schema-typescript';

const schema = {
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
                "type": { "type": "string" } 
            },
            "required": ["name", "type"]
        }
    }
};

console.log(generateTypeScript(schema));
// OUTPUT:
interface Pet {
  name: string;
  type: string;
}
interface Person {
  firstName: string;
  pets: Pet[];
}
```

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## Need Help?

`schema-typescript` might not work perfectly for all JSON schemas yet. We value your feedback and contributions to make it better. If you encounter any issues or have suggestions for improvements, please [let us know](https://github.com/cosmology-tech/schema-typescript/issues).

## License 📜

Distributed under the MIT License. See \`LICENSE\` for more information.

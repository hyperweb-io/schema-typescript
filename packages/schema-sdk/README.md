# schema-sdk 

<p align="center" width="100%">
  <img src="https://github.com/cosmology-tech/interweb-utils/assets/545047/89c743c4-be88-409f-9a77-4b02cd7fe9a4" width="80">
  <br/>
  OpenAPI Schema TypeScript utilities for the Interweb
  <br />
  <a href="https://github.com/cosmology-tech/schema-typescript/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/cosmology-tech/schema-typescript/actions/workflows/run-tests.yaml/badge.svg" />
  </a>
   <a href="https://github.com/cosmology-tech/schema-typescript/blob/main/LICENSE-MIT">
    <img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"/>
  </a>
</p>


Welcome to _schema-sdk_! This project provides robust tools for handling OpenAPI schemas and converting them to TypeScript clients with ease and efficiency.

## Features 

- **📜 OpenAPI Specification (formerly Swagger)**: Seamlessly integrate with the OpenAPI Spec to generate TypeScript clients. This ensures robust API client generation with comprehensive type safety and support for various API definitions.

- **🔧 JSON Schema to TypeScript**: Convert JSON schemas into TypeScript interfaces automatically.

- **📦 Modular**: Designed to be reusable with minimal dependencies.

## Getting Started 🏁

To get started with _schema-sdk_, simply run:

```bash
npm install schema-sdk
```

## Usage 

Below are examples demonstrating how to use `schema-sdk` for generating TypeScript clients and handling OpenAPI specifications:

### Generating OpenAPI Client

```ts
import schema from 'path-to-your/swagger.json';
import { generateOpenApiClient, getDefaultSchemaSDKOptions } from 'schema-sdk';
import { writeFileSync } from 'fs';

const options = getDefaultSchemaSDKOptions({
  exclude: [
    '*.v1beta1.*',
    '*.v2beta1.*',
    'io.k8s.api.events.v1.EventSeries',
    'io.k8s.api.events.v1.Event',
    'io.k8s.api.flowcontrol*'
  ]
});

const code = generateOpenApiClient({
  ...options,
  paths: {
    exclude: [
      '*flowschema*',
      '*v1beta1*',
      '*v2beta1*'
    ],
    excludeRequests: [
      'head',
      'options'
    ],
    excludeTags: [
      'storage_v1beta1',
      '*v1beta1',
      '*v2beta1',
      '*v1beta1*',
      '*v2beta1*'
    ]
  },
  includeTypeComments: true,
  includeMethodComments: true,
  mergedParams: false,
  namingStrategy: {
    useLastSegment: true,
    renameMap: {
      'io.k8s.api.discovery.v1.EndpointPort': 'DiscoveryEndpointPort',
      'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference': 'ApiExtServiceReference',
      'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig': 'ApiExtWebhookClientConfig',
      'io.k8s.api.admissionregistration.v1.ServiceReference': 'AdmissionServiceReference'
    }
  }
}, schema);

writeFileSync(__dirname + '/output/swagger-client.ts', code);
```

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## Need Help?

`schema-sdk` might not work perfectly for all JSON schemas yet. We value your feedback and contributions to make it better. If you encounter any issues or have suggestions for improvements, please [let us know](https://github.com/cosmology-tech/schema-typescript/issues).

## License 📜

Distributed under the MIT License. See \`LICENSE\` for more information.

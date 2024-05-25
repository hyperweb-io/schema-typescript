import { writeFileSync } from 'fs';

import schema from '../../../__fixtures__/openapi/swagger.json';
import { generateOpenApiClient } from '../src/openapi';
import { getDefaultSchemaSDKOptions } from '../src/types';

it('swagger', () => {
  const options = getDefaultSchemaSDKOptions({
    clientName: 'KubernetesClient',
    includeSwaggerUrl: true,
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
    operationNamingStrategy: {
      aliases: {
        listCoreV1PodForAllNamespaces: 'getPods'
      },
      renameMap: {
        listCoreV1PodForAllNamespaces: 'listPods'
      }
    },
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
  }, schema as any);
  expect(code).toMatchSnapshot();
  writeFileSync(__dirname + '/../../../__fixtures__/output/swagger-client.ts', code);
});

it('merged', () => {
  const options = getDefaultSchemaSDKOptions({
    // include: [
    //     '*.v1.*'
    // ],
    clientName: 'KubernetesClient',
    includeSwaggerUrl: true,
    includeMethodComments: true,
    namingStrategy: {
      useLastSegment: true
    }
  });
  const code = generateOpenApiClient({
    ...options,
    version: 'v1',
    mergedParams: true
  }, schema as any);
  expect(code).toMatchSnapshot();
  writeFileSync(__dirname + '/../../../__fixtures__/output/swagger-client.merged.ts', code);
});

it('openapi', () => {
  const data = Object.keys(schema.definitions);
  writeFileSync(__dirname + '/../../../__fixtures__/output/swagger-definitions.json', JSON.stringify(data, null, 2));
});
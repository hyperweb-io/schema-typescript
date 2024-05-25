import { writeFileSync } from 'fs';
import { generateTypeScript } from 'schema-typescript';

import schema from '../../../__fixtures__/openapi/swagger.json';

const myschema = {
  title: 'Kubernetes',
  definitions: schema.definitions
};

it('swagger', () => {
  const code = generateTypeScript(myschema as any, {
        
  });
  expect(code).toMatchSnapshot();
  writeFileSync(__dirname + '/../../../__fixtures__/output/swagger.ts', code);
});

it('naming', () => {
  const code = generateTypeScript(myschema as any, {
    exclude: [
      '*.v1beta1.*',
      '*.v1beta2.*',
      '*.v2beta2.*'
    ],
    includeTypeComments: true,
    namingStrategy: {
      renameMap: {
        'io.k8s.api.events.v1.Event': 'EventsEvent',
        'io.k8s.api.events.v1.EventList': 'EventsEventList',
        'io.k8s.api.events.v1.EventSeries': 'EventsEventSeries',
        'io.k8s.api.discovery.v1.EndpointPort': 'DiscoveryEndpoint',
        'io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.ServiceReference': 'ApiServiceReference'
      }
    }
  });
  expect(code).toMatchSnapshot();
  writeFileSync(__dirname + '/../../../__fixtures__/output/swagger.includes.ts', code);
});

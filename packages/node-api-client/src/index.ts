import * as http from 'http';
import * as querystring from 'querystring';
import { URLSearchParams } from 'url';

interface RequestOptions<Params> {
  hostname: string;
  path: string;
  headers?: { [key: string]: string };
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: Params;
  timeout?: number;
}

export interface APIClientOptions {
  restEndpoint: string;
}

export interface APIClientRequestHeaders {
  accept?: string | string[] | undefined;
  'accept-charset'?: string | string[] | undefined;
  'accept-encoding'?: string | string[] | undefined;
  'accept-language'?: string | string[] | undefined;
  'accept-ranges'?: string | undefined;
  'access-control-allow-credentials'?: string | undefined;
  'access-control-allow-headers'?: string | undefined;
  'access-control-allow-methods'?: string | undefined;
  'access-control-allow-origin'?: string | undefined;
  'access-control-expose-headers'?: string | undefined;
  'access-control-max-age'?: string | undefined;
  'access-control-request-headers'?: string | undefined;
  'access-control-request-method'?: string | undefined;
  age?: string | undefined;
  allow?: string | undefined;
  authorization?: string | undefined;
  'cache-control'?: string | undefined;
  'cdn-cache-control'?: string | undefined;
  connection?: string | string[] | undefined;
  'content-disposition'?: string | undefined;
  'content-encoding'?: string | undefined;
  'content-language'?: string | undefined;
  'content-length'?: string | number | undefined;
  'content-location'?: string | undefined;
  'content-range'?: string | undefined;
  'content-security-policy'?: string | undefined;
  'content-security-policy-report-only'?: string | undefined;
  cookie?: string | string[] | undefined;
  dav?: string | string[] | undefined;
  dnt?: string | undefined;
  date?: string | undefined;
  etag?: string | undefined;
  expect?: string | undefined;
  expires?: string | undefined;
  forwarded?: string | undefined;
  from?: string | undefined;
  host?: string | undefined;
  'if-match'?: string | undefined;
  'if-modified-since'?: string | undefined;
  'if-none-match'?: string | undefined;
  'if-range'?: string | undefined;
  'if-unmodified-since'?: string | undefined;
  'last-modified'?: string | undefined;
  link?: string | string[] | undefined;
  location?: string | undefined;
  'max-forwards'?: string | undefined;
  origin?: string | undefined;
  prgama?: string | string[] | undefined;
  'proxy-authenticate'?: string | string[] | undefined;
  'proxy-authorization'?: string | undefined;
  'public-key-pins'?: string | undefined;
  'public-key-pins-report-only'?: string | undefined;
  range?: string | undefined;
  referer?: string | undefined;
  'referrer-policy'?: string | undefined;
  refresh?: string | undefined;
  'retry-after'?: string | undefined;
  'sec-websocket-accept'?: string | undefined;
  'sec-websocket-extensions'?: string | string[] | undefined;
  'sec-websocket-key'?: string | undefined;
  'sec-websocket-protocol'?: string | string[] | undefined;
  'sec-websocket-version'?: string | undefined;
  server?: string | undefined;
  'set-cookie'?: string | string[] | undefined;
  'strict-transport-security'?: string | undefined;
  te?: string | undefined;
  trailer?: string | undefined;
  'transfer-encoding'?: string | undefined;
  'user-agent'?: string | undefined;
  upgrade?: string | undefined;
  'upgrade-insecure-requests'?: string | undefined;
  vary?: string | undefined;
  via?: string | string[] | undefined;
  warning?: string | undefined;
  'www-authenticate'?: string | string[] | undefined;
  'x-content-type-options'?: string | undefined;
  'x-dns-prefetch-control'?: string | undefined;
  'x-frame-options'?: string | undefined;
  'x-xss-protection'?: string | undefined;
}
export type APIClientRequestOpts = {
  headers?: APIClientRequestHeaders;
  timeout?: number;
};
export class APIClient {
  private hostname: string;
  private port: number = 8001; // Default Kubernetes proxy port
  private defaultTimeout: number = 10000; // 10 seconds

  constructor(options: APIClientOptions) {
    const url = new URL(options.restEndpoint);
    this.hostname = url.hostname;
    this.port = url.port ? parseInt(url.port) : this.port;
  }

  private buildFullPath(endpoint: string, query?: { [key: string]: any }): string {
    const queryString = query ? `?${querystring.stringify(query)}` : '';
    return endpoint + queryString;
  }

  get<Resp = unknown>(
    endpoint: string,
    query?: { [key: string]: any },
    body?: void,
    opts: APIClientRequestOpts = {}
  ): Promise<Resp> {
    const fullPath = this.buildFullPath(endpoint, query);
    return this.request<Resp, void>({
      path: fullPath,
      method: 'GET',
      // @ts-ignore
      headers: opts.headers,
      timeout: opts.timeout || this.defaultTimeout,
    });
  }

  post<Resp = unknown, Params = any>(
    endpoint: string,
    query?: { [key: string]: any },
    body?: Params,
    opts: http.RequestOptions & { timeout?: number; isFormData?: boolean } = {}
  ): Promise<Resp> {
    const fullPath = this.buildFullPath(endpoint, query);
    const headers: http.OutgoingHttpHeaders = opts.isFormData
      ? {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...opts.headers,
      }
      : {
        'Content-Type': 'application/json',
        ...opts.headers,
      };
    const bodyContent = opts.isFormData
      ? new URLSearchParams(body as any).toString()
      : JSON.stringify(body);
    headers['Content-Length'] = Buffer.byteLength(bodyContent).toString();

    return this.request<Resp, Params>({
      path: fullPath,
      method: 'POST',
      // @ts-ignore
      headers,
      // @ts-ignore
      params: bodyContent,
      timeout: opts.timeout || this.defaultTimeout,
    });
  }

  patch<Resp = unknown, Params = any>(
    endpoint: string,
    query?: { [key: string]: any },
    body?: Params,
    opts: http.RequestOptions & { timeout?: number; isFormData?: boolean } = {}
  ): Promise<Resp> {
    const fullPath = this.buildFullPath(endpoint, query);
    const headers: http.OutgoingHttpHeaders = opts.isFormData
      ? {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...opts.headers,
      }
      : {
        'Content-Type': 'application/json',
        ...opts.headers,
      };
    const bodyContent = opts.isFormData
      ? new URLSearchParams(body as any).toString()
      : JSON.stringify(body);
    headers['Content-Length'] = Buffer.byteLength(bodyContent).toString();

    return this.request<Resp, Params>({
      path: fullPath,
      method: 'PATCH',
      // @ts-ignore
      headers,
      // @ts-ignore
      params: bodyContent,
      timeout: opts.timeout || this.defaultTimeout,
    });
  }

  put<Resp = unknown, Params = any>(
    endpoint: string,
    query?: { [key: string]: any },
    body?: Params,
    opts: http.RequestOptions & { timeout?: number } = {}
  ): Promise<Resp> {
    const fullPath = this.buildFullPath(endpoint, query);
    const bodyContent = JSON.stringify(body);
    const headers = {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(bodyContent).toString(),
      ...opts.headers,
    };

    return this.request<Resp, Params>({
      path: fullPath,
      method: 'PUT',
      // @ts-ignore
      headers,
      // @ts-ignore
      params: bodyContent,
      timeout: opts.timeout || this.defaultTimeout,
    });
  }

  delete<Resp = unknown, Params = any>(
    endpoint: string,
    query?: { [key: string]: any },
    body?: void,
    opts: http.RequestOptions & { timeout?: number } = {}
  ): Promise<Resp> {
    const fullPath = this.buildFullPath(endpoint, query);
    return this.request<Resp, void>({
      path: fullPath,
      method: 'DELETE',
      // @ts-ignore
      headers: opts.headers,
      timeout: opts.timeout || this.defaultTimeout,
    });
  }

  private request<Resp, Params>(
    options: RequestOptions<Params>
  ): Promise<Resp> {
    return new Promise((resolve, reject) => {
      const requestOptions: http.RequestOptions = {
        hostname: this.hostname,
        port: this.port,
        path: options.path,
        method: options.method,
        headers: options.headers,
      };

      const req = http.request(requestOptions, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          try {
            const parsedData: Resp = JSON.parse(data);
            resolve(parsedData);
          } catch (error) {
            reject(error);
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.setTimeout(options.timeout, () => {
        req.abort();
        reject(new Error('Request timeout'));
      });

      if (options.params && ['POST', 'PUT', 'PATCH'].includes(options.method)) {
        req.write(options.params);
      }

      req.end();
    });
  }
}

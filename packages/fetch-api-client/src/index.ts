import fetch from 'isomorphic-fetch';

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

export class APIClient {
  private baseUrl: string;
  private defaultTimeout: number = 10000; // 10 seconds

  constructor(options: APIClientOptions) {
    this.baseUrl = options.restEndpoint;
  }

  private buildUrl(endpoint: string, query?: { [key: string]: any }): string {
    const url = new URL(endpoint, this.baseUrl);
    if (query) {
      Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
    }
    return url.toString();
  }

  private async request<Resp>(options: RequestOptions<any>): Promise<Resp> {
    const { path, headers, method, params, timeout } = options;
    const url = this.buildUrl(path, method === 'GET' && params);
    const fetchOptions: RequestInit = {
      method,
      headers,
      body: method !== 'GET' && method !== 'DELETE' ? JSON.stringify(params) : null,
    };

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout || this.defaultTimeout);
    fetchOptions.signal = controller.signal;

    const response = await fetch(url, fetchOptions);
    clearTimeout(id);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json() as Promise<Resp>;
  }

  get<Resp = unknown>(endpoint: string, query?: { [key: string]: any }, opts: { headers?: { [key: string]: string }, timeout?: number } = {}): Promise<Resp> {
    return this.request<Resp>({
      path: endpoint,
      method: 'GET',
      headers: opts.headers,
      timeout: opts.timeout || this.defaultTimeout,
      params: query, // Correctly use query parameters for GET
      hostname: '',
    });
  }

  post<Resp = unknown, Params = any>(endpoint: string, params: Params, opts: { headers?: { [key: string]: string }, timeout?: number } = {}): Promise<Resp> {
    return this.request<Resp>({
      path: endpoint,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...opts.headers,
      },
      params,
      timeout: opts.timeout || this.defaultTimeout,
      hostname: '',
    });
  }

  put<Resp = unknown, Params = any>(endpoint: string, params: Params, opts: { headers?: { [key: string]: string }, timeout?: number } = {}): Promise<Resp> {
    return this.request<Resp>({
      path: endpoint,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...opts.headers,
      },
      params,
      timeout: opts.timeout || this.defaultTimeout,
      hostname: '',
    });
  }

  patch<Resp = unknown, Params = any>(endpoint: string, params: Params, opts: { headers?: { [key: string]: string }, timeout?: number } = {}): Promise<Resp> {
    return this.request<Resp>({
      path: endpoint,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...opts.headers,
      },
      params,
      timeout: opts.timeout || this.defaultTimeout,
      hostname: '',
    });
  }

  delete<Resp = unknown>(endpoint: string, opts: { headers?: { [key: string]: string }, timeout?: number } = {}): Promise<Resp> {
    return this.request<Resp>({
      path: endpoint,
      method: 'DELETE',
      headers: opts.headers,
      timeout: opts.timeout || this.defaultTimeout,
      hostname: '',
    });
  }
}

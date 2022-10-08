import { HttpResponse } from '@/domain/protocols';

export interface HttpGetClient {
  get(url: string): Promise<HttpResponse>;
}

export interface HttpClient extends HttpGetClient {}

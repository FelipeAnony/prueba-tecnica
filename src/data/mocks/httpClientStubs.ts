import { HttpResponse } from '@/domain/protocols';
import { HttpGetClient } from '../protocols';

export const makeHttpGetClientStub = () => {
  class HttpGetClientStub implements HttpGetClient {
    async get(url: string): Promise<HttpResponse> {
      return Promise.resolve({ statusCode: 200, body: {} });
    }
  }

  return new HttpGetClientStub();
};

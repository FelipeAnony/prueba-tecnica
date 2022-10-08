import { HttpClient } from '@/data/protocols';
import { HttpResponse } from '@/domain/protocols';

export class HttpFetchClientAdapter implements HttpClient {
  async get(url: string): Promise<HttpResponse> {
    const response = await fetch(url);
    const formattedResponse = await response.json();

    return {
      statusCode: formattedResponse.status,
      body: formattedResponse.data,
    };
  }
}

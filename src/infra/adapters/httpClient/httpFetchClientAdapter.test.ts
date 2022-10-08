import { faker } from '@faker-js/faker';

import { HttpClient } from '@/data/protocols';
import { HttpResponse } from '@/domain/protocols';

const fetchMock = jest.fn(
  (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<Response> => {
    return Promise.resolve({
      json: () => Promise.resolve({ status: 200, data: { data: 'any-data' } }),
    } as Response);
  }
);

global.fetch = fetchMock;

const makeSut = () => {
  class HttpFetchClientAdapter implements HttpClient {
    async get(url: string): Promise<HttpResponse> {
      const response = await fetch(url);
      const formattedResponse = await response.json();
      return { statusCode: response.status, body: formattedResponse };
    }
  }
  return { sut: new HttpFetchClientAdapter() };
};

describe('HttpClient adapter', () => {
  it('Should call fetch with correct params when get method is called', () => {
    const { sut } = makeSut();
    const url = faker.internet.url();
    sut.get(url);

    expect(fetchMock).toBeCalledWith(url);
  });

  it('Should throw if fetch throws', () => {
    const { sut } = makeSut();
    fetchMock.mockRejectedValueOnce(new Error('any-error'));
    const url = faker.internet.url();

    expect(sut.get(url)).rejects.toThrow(new Error('any-error'));
  });
});

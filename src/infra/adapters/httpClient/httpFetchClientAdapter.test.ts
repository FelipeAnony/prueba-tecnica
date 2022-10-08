import { faker } from '@faker-js/faker';

import { fetchMock, fetchMockSuccessReturn } from '@/infra/mocks';
import { HttpFetchClientAdapter } from './httpFetchClientAdapter';

global.fetch = fetchMock;

const makeSut = () => new HttpFetchClientAdapter();

describe('HttpClient adapter', () => {
  it('Should call fetch with correct params when get method is called', () => {
    const sut = makeSut();
    const url = faker.internet.url();
    sut.get(url);

    expect(fetchMock).toBeCalledWith(url);
  });

  it('Should throw if fetch throws', () => {
    const sut = makeSut();
    fetchMock.mockRejectedValueOnce(new Error('any-error'));
    const url = faker.internet.url();

    expect(sut.get(url)).rejects.toThrow(new Error('any-error'));
  });

  it('Should return the correct value on success case', async () => {
    const sut = makeSut();

    expect(await sut.get('any-url')).toEqual({
      statusCode: 200,
      body: fetchMockSuccessReturn,
    });
  });
});

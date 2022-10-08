import { faker } from '@faker-js/faker';

import { HttpGetClient } from '@/data/protocols';
import { PostModel } from '@/domain/models';
import { HttpResponse } from '@/domain/protocols';
import { Posts } from '@/domain/usecases';

const makeHttpGetClientStub = () => {
  class HttpGetClientStub implements HttpGetClient {
    async get(url: string): Promise<HttpResponse> {
      return Promise.resolve({ statusCode: 200, body: {} });
    }
  }

  return new HttpGetClientStub();
};

const makeSut = () => {
  class RemotePosts implements Posts {
    private posts: PostModel[] = [];

    constructor(
      private readonly url: string,
      private readonly httpGetClient: HttpGetClient
    ) {}

    async getPostsFromDB(): Promise<HttpResponse> {
      const response = await this.httpGetClient.get(this.url);
      if (response.statusCode === 200) this.posts = response.body;
      return response;
    }

    getPosts(): PostModel[] {
      return this.posts;
    }

    addPost(post: PostModel): void {}

    removePost(postId: number): void {}

    editPost(postId: number, newData: PostModel): void {}
  }

  const url = faker.internet.url();
  const HttpGetClientStub = makeHttpGetClientStub();

  return {
    sut: new RemotePosts(url, HttpGetClientStub),
    HttpGetClientStub,
    url,
  };
};

describe('RemotePosts usecase', () => {
  it('Should calls HttpGetClient get method with correct params when getPostFromDB is called', () => {
    const { sut, HttpGetClientStub, url } = makeSut();
    const httpGetClientSpy = jest.spyOn(HttpGetClientStub, 'get');
    sut.getPostsFromDB();

    expect(httpGetClientSpy).toBeCalledWith(url);
  });

  it('Should throw if HttpGetClient throws', () => {
    const { sut, HttpGetClientStub } = makeSut();
    jest.spyOn(HttpGetClientStub, 'get').mockImplementationOnce(() => {
      throw new Error('any-error');
    });

    expect(sut.getPostsFromDB()).rejects.toThrow();
  });

  it('Should return the correct value when getPosts method is called', async () => {
    const { sut, HttpGetClientStub } = makeSut();
    const postMock: PostModel = {
      body: 'any-body',
      id: 1,
      title: 'any-title',
      userId: 'any-id',
    };

    jest
      .spyOn(HttpGetClientStub, 'get')
      .mockResolvedValueOnce({ statusCode: 200, body: [postMock] });

    expect(sut.getPosts()).toEqual([]);
    await sut.getPostsFromDB();
    expect(sut.getPosts()).toEqual([postMock]);
  });
});

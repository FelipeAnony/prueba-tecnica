import { HttpGetClient } from '@/data/protocols';
import { PostModel } from '@/domain/models';
import { HttpResponse } from '@/domain/protocols';
import { Posts } from '@/domain/usecases';
import { faker } from '@faker-js/faker';

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
    constructor(
      private readonly url: string,
      private readonly httpGetClient: HttpGetClient
    ) {}

    async getPostsFromDB(): Promise<HttpResponse> {
      const response = await this.httpGetClient.get(this.url);
      return response;
    }

    getPosts(): PostModel[] {
      return [];
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
  it('Should calls HttpGetClient get method with correct params', () => {
    const { sut, HttpGetClientStub, url } = makeSut();
    const httpGetClientSpy = jest.spyOn(HttpGetClientStub, 'get');
    sut.getPostsFromDB();

    expect(httpGetClientSpy).toBeCalledWith(url);
  });
});

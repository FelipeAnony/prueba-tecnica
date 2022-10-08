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
    private postsList: PostModel[] = [];

    constructor(
      private readonly url: string,
      private readonly httpGetClient: HttpGetClient
    ) {}

    async getPostsFromDB(): Promise<HttpResponse> {
      const response = await this.httpGetClient.get(this.url);
      if (response.statusCode === 200) this.postsList = response.body;
      return response;
    }

    getPosts(): PostModel[] {
      return this.postsList;
    }

    addPost(post: PostModel): void {
      this.postsList.push(post);
    }

    removePost(postId: number): void {
      this.postsList = this.postsList.filter((e) => e.id !== postId);
    }

    editPost(postId: number, newData: PostModel): void {
      const postIndex = this.postsList.findIndex((e) => e.id === postId);
      this.postsList[postIndex] = newData;
    }
  }

  const url = faker.internet.url();
  const HttpGetClientStub = makeHttpGetClientStub();

  return {
    sut: new RemotePosts(url, HttpGetClientStub),
    HttpGetClientStub,
    url,
  };
};

const postMock: PostModel = {
  body: 'any-body',
  id: 1,
  title: 'any-title',
  userId: 'any-id',
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
    jest
      .spyOn(HttpGetClientStub, 'get')
      .mockResolvedValueOnce({ statusCode: 200, body: [postMock] });

    expect(sut.getPosts()).toEqual([]);
    await sut.getPostsFromDB();
    expect(sut.getPosts()).toEqual([postMock]);
  });

  it('Should add new post to list when addPost method is called', () => {
    const { sut } = makeSut();
    expect(sut.getPosts()).toEqual([]);
    sut.addPost(postMock);
    expect(sut.getPosts()).toEqual([postMock]);
  });

  it('Should remove the correct post from list when removePost method is called', () => {
    const { sut } = makeSut();
    sut.addPost(postMock);
    expect(sut.getPosts()).toEqual([postMock]);

    sut.removePost(postMock.id);
    expect(sut.getPosts()).toEqual([]);
  });

  it('Should edit the correct item from list when editPost method is called', () => {
    const { sut } = makeSut();
    sut.addPost(postMock);
    expect(sut.getPosts()[0].title).toBe('any-title');
    sut.editPost(postMock.id, { ...postMock, title: 'new-title' });
    expect(sut.getPosts()[0].title).toBe('new-title');
  });
});

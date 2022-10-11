import { HttpGetClient } from '@/data/protocols';
import { PostModel } from '@/domain/models';
import { HttpResponse } from '@/domain/protocols';
import { Posts } from '@/domain/usecases';

export class RemotePosts implements Posts {
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
    this.postsList.unshift(post);
  }

  removePost(postId: number): void {
    this.postsList = this.postsList.filter((e) => e.id !== postId);
  }

  editPost(postId: number, newData: PostModel): void {
    const postIndex = this.postsList.findIndex((e) => e.id === postId);
    if (postIndex >= 0) {
      this.postsList[postIndex] = newData;
    }
  }
}

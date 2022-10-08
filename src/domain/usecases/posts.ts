import { PostModel } from '../models';
import { HttpResponse } from '../protocols';

export interface Posts {
  getPostsFromDB(): Promise<HttpResponse>;
  getPosts(): PostModel[];
  addPost(post: PostModel): void;
  removePost(postId: number): void;
  editPost(postId: number, newData: PostModel): void;
}

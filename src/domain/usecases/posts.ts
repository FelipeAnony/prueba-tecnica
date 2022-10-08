import { PostModel } from '../models';
import { HttpResponse } from '../protocols';

export interface Posts {
  getRemotePosts(): Promise<HttpResponse<PostModel[]>>;
  getLocalPosts(): PostModel[];
  addPost(post: PostModel): void;
  removePost(postId: number): void;
  editPost(postId: number, newData: PostModel): void;
}

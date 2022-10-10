import { PostModel } from '@/domain/models';

export interface PostDataContextProtocol {
  postsList: PostModel[];
  error: Error | null;
  addPost: (post: PostModel) => void;
  removePost: (postId: number) => void;
  editPost: (postId: number, newPostData: PostModel) => void;
}

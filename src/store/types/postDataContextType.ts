import { Actions } from '../hooks/useRemotePosts';
import { ActionType } from './actionType';
import { PostModel } from '@/domain/models';

export type PostDataContextType = {
  postsList: PostModel[];
  dispatch: React.Dispatch<ActionType<Actions>>;
  error: Error | null;
};

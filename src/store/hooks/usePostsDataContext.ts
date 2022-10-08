import { useContext } from 'react';
import { PostsDataContext } from '../contexts';

export const usePostsDataContext = () => {
  return useContext(PostsDataContext);
};

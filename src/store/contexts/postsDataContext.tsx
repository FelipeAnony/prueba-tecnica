import { createContext } from 'react';

import { useRemotePosts } from '../hooks/useRemotePosts';
import { PostDataContextType } from '../types';

type Props = {
  children: JSX.Element;
};

export const PostsDataContext = createContext({} as PostDataContextType);

const PostsDataContextProvider: React.FC<Props> = ({ children }) => {
  const { postsList, dispatch, error } = useRemotePosts();

  return (
    <PostsDataContext.Provider value={{ postsList, dispatch, error }}>
      {children}
    </PostsDataContext.Provider>
  );
};

export default PostsDataContextProvider;

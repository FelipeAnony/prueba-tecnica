import { createContext } from 'react';

import { useRemotePosts } from '../hooks/useRemotePosts';
import { PostDataContextType } from '../types';

type Props = {
  children: JSX.Element;
};

const contextInitialValue: PostDataContextType = {
  dispatch: () => null,
  error: null,
  postsList: [],
};

export const PostsDataContext = createContext(contextInitialValue);

export const PostsDataContextProvider: React.FC<Props> = ({ children }) => {
  const { postsList, dispatch, error } = useRemotePosts();

  return (
    <PostsDataContext.Provider value={{ postsList, dispatch, error }}>
      {children}
    </PostsDataContext.Provider>
  );
};

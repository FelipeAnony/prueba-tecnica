import { createContext } from 'react';

import { useRemotePosts } from '../hooks/useRemotePosts';
import { PostDataContextProtocol } from '../protocols';

type Props = {
  children: JSX.Element;
};

const contextInitialValue: PostDataContextProtocol = {
  addPost: () => {},
  editPost: () => {},
  removePost: () => {},
  postsList: [],
  error: null,
};

export const PostsDataContext = createContext(contextInitialValue);

export const PostsDataContextProvider: React.FC<Props> = ({ children }) => {
  const remotePosts = useRemotePosts();

  return (
    <PostsDataContext.Provider value={remotePosts}>
      {children}
    </PostsDataContext.Provider>
  );
};

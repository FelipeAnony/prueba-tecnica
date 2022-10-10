import { useEffect, useState, useRef } from 'react';

import { PostModel } from '@/domain/models';
import { makeRemotePosts } from '@/main/factories';

export const useRemotePosts = () => {
  const [postsList, setPostsList] = useState<PostModel[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const { current: remotePosts } = useRef(makeRemotePosts());

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await remotePosts.getPostsFromDB();
        setPostsList(response.body);
      } catch (error) {
        setError(error as Error);
      }
    };
    loadData();
  }, []);

  const syncRemotePostAndState = () => {
    setPostsList([...remotePosts.getPosts()]);
  };

  const addPost = (post: PostModel) => {
    remotePosts.addPost(post);
    syncRemotePostAndState();
  };

  const removePost = (postId: number) => {
    remotePosts.removePost(postId);
    syncRemotePostAndState();
  };

  const editPost = (postId: number, newPostData: PostModel) => {
    remotePosts.editPost(postId, newPostData);
    syncRemotePostAndState();
  };

  return { addPost, removePost, editPost, error, postsList };
};

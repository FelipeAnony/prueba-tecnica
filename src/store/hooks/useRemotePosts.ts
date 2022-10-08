import { useEffect, useReducer, useState } from 'react';

import { PostModel } from '@/domain/models';
import { makeRemotePosts } from '@/main/factories/makeRemotePosts';

import { ActionType } from '../types';

export type Actions = 'ADD_POST' | 'EDIT_POST' | 'REMOVE_POST' | 'UPDATE';
const remotePost = makeRemotePosts();

const postListReducer = (
  state: PostModel[],
  action: ActionType<Actions>
): PostModel[] => {
  switch (action.type) {
    case 'UPDATE': {
      return { ...remotePost.getPosts() };
    }

    case 'ADD_POST': {
      action.payload && remotePost.addPost(action.payload.post);
      break;
    }

    case 'REMOVE_POST': {
      action.payload && remotePost.removePost(action.payload.postId);
      break;
    }

    case 'EDIT_POST': {
      action.payload &&
        remotePost.editPost(action.payload.postId, action.payload.post);
      break;
    }
  }

  return { ...remotePost.getPosts() };
};

export const useRemotePosts = () => {
  const [postsList, dispatch] = useReducer(postListReducer, []);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        await remotePost.getPostsFromDB();
        dispatch({ type: 'UPDATE' });
      } catch (error) {
        setError(error as Error);
      }
    };

    loadData();
  }, []);

  return { postsList, dispatch, error };
};

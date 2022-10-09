import { usePostsDataContext } from '@/store/hooks';

export const useCardsContainer = () => {
  const { error, postsList, dispatch } = usePostsDataContext();

  return { error, postsList };
};

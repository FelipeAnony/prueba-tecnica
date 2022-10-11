import { PostModel } from '@/domain/models';
import { useCardsContainer } from '../components/CardsContainer/useCardsContainer';

const useCardsContainerMock = useCardsContainer as jest.MockedFn<
  typeof useCardsContainer
>;

export const mockUseCardsContainer = (
  error: Error | null = null,
  postsToRender: PostModel[] = []
) => {
  useCardsContainerMock.mockReturnValueOnce({
    error,
    postsToRender,
  });
};

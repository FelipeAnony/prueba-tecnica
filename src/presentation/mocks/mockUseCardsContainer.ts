import { PostModel } from '@/domain/models';
import { useCardsContainer } from '../hooks/useCardsContainer';

const mockedUseCardsContainer = useCardsContainer as jest.MockedFn<
  typeof useCardsContainer
>;

export const mockUseCardsContainer = (
  error: Error | null = null,
  postsToRender: PostModel[] = []
) => {
  mockedUseCardsContainer.mockReturnValueOnce({
    error,
    postsToRender,
  });
};

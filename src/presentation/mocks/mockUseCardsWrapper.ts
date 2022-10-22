import { PostModel } from '@/domain/models';
import { useCardsWrapper } from '../hooks/useCardsWrapper';

const mockedUseCardsWrapper = useCardsWrapper as jest.MockedFn<
  typeof useCardsWrapper
>;

export const mockUseCardsContainer = (
  error: Error | null = null,
  postsToRender: PostModel[] = []
) => {
  mockedUseCardsWrapper.mockReturnValueOnce({
    error,
    postsToRender,
  });
};

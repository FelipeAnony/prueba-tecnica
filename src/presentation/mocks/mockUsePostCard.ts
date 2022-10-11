import { usePostCard } from '../components/PostCard/usePostCard';

const mockedUsePostCard = usePostCard as jest.MockedFn<typeof usePostCard>;

export const mockUsePostCard = (modalIsOpen = false) => {
  const closeModal = jest.fn(() => {});
  const handleLikeClick = jest.fn(() => {});
  const openDeleteModal = jest.fn(() => {});
  const openEditModal = jest.fn(() => {});

  mockedUsePostCard.mockReturnValueOnce({
    closeModal,
    handleLikeClick,
    like: false,
    modalIsOpen,
    modalContent: null,
    openDeleteModal,
    openEditModal,
  });

  return { closeModal, handleLikeClick, openDeleteModal, openEditModal };
};

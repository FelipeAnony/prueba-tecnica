import { useState } from 'react';

type ModalContentType = 'editModal' | 'deleteModal' | null;

export const usePostCard = () => {
  const [like, setLike] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContentType>(null);

  const handleLikeClick = () => setLike(!like);
  const closeModal = () => setModalIsOpen(false);

  const openEditModal = () => {
    setModalContent('editModal');
    setModalIsOpen(true);
  };

  const openDeleteModal = () => {
    setModalContent('deleteModal');
    setModalIsOpen(true);
  };

  return {
    like,
    modalIsOpen,
    modalContent,
    handleLikeClick,
    openEditModal,
    openDeleteModal,
    closeModal,
  };
};

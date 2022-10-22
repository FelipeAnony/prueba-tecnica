import { PostModel } from '@/domain/models';
import { usePostsDataContext } from '@/store/hooks';
import { useState } from 'react';
import { useForm } from './useForm';

export const useAddPostForm = () => {
  const { addPost, postsList } = usePostsDataContext();
  const [formData, handleChange, clearForm] = useForm({ title: '', body: '' });
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenClick = () => setIsOpen(!isOpen);

  const handleAddPost = (post: PostModel) => {
    addPost(post);
    clearForm();
  };

  return {
    formData,
    isOpen,
    handleChange,
    handleOpenClick,
    handleAddPost,
    postsList,
  };
};

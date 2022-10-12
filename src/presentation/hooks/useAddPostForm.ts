import { PostModel } from '@/domain/models';
import { usePostsDataContext } from '@/store/hooks';
import { useState } from 'react';

export const useAddPostForm = () => {
  const { addPost, postsList } = usePostsDataContext();
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOpenClick = () => setIsOpen(!isOpen);
  const clearForm = () => setFormData({ body: '', title: '' });

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

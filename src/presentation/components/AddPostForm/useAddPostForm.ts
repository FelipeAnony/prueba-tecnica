import { useState } from 'react';

export const useAddPostForm = () => {
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

  return { formData, isOpen, handleChange, handleOpenClick, clearForm };
};

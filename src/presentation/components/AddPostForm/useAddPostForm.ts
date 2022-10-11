import React, { useState } from 'react';

export const useAddPostForm = () => {
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpenClick = () => {
    setIsOpen(!isOpen);
  };

  const clearForm = () => {
    setFormData({ body: '', title: '' });
  };

  return { formData, isOpen, handleChange, handleOpenClick, clearForm };
};

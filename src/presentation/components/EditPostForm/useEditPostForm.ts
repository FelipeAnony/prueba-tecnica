import { useState } from 'react';

type FormDataType = {
  title: string;
  body: string;
};

export const useEditPostForm = (initialTitle: string, initialBody: string) => {
  const [formData, setFormData] = useState<FormDataType>({
    title: initialTitle,
    body: initialBody,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return { formData, handleChange };
};

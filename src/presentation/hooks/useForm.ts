import { useState } from 'react';

type HandleChangeParamType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

type UseFormType = <T>(
  initialFormValue: T
) => [T, (e: HandleChangeParamType) => void, () => void];

export const useForm: UseFormType = (initialFormValue) => {
  const [formData, setFormData] = useState(initialFormValue);

  const handleChange = (e: HandleChangeParamType) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => setFormData(initialFormValue);

  return [formData, handleChange, clearForm];
};

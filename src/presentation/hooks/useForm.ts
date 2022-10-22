import { useState } from 'react';

type handleChangeParamType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export const useForm = <T>(
  initialFormValue: T
): [T, (e: handleChangeParamType) => void, () => void] => {
  const [formData, setFormData] = useState(initialFormValue);

  const handleChange = (e: handleChangeParamType) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => setFormData(initialFormValue);

  return [formData, handleChange, clearForm];
};

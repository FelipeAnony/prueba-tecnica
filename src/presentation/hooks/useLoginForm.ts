import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalDataContext } from '@/store/hooks';
import { makeLocalAuthentication } from '@/main/factories';
import { useForm } from './useForm';

const loginDataInitialValue = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const [error, setError] = useState<Error | null>(null);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [loginData, handleChange] = useForm(loginDataInitialValue);

  const { setUser } = useGlobalDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData.email.length < 6 || loginData.password.length < 6) {
      setButtonIsDisabled(true);
    } else setButtonIsDisabled(false);
  }, [loginData]);

  const handleSubmit = async () => {
    setButtonIsDisabled(true);
    const authentication = makeLocalAuthentication();
    try {
      const response = await authentication.auth(loginData);
      setUser(response);
      navigate('/');
    } catch (error) {
      setButtonIsDisabled(false);
      setError(error as Error);
    }
  };

  return { loginData, error, handleChange, handleSubmit, buttonIsDisabled };
};

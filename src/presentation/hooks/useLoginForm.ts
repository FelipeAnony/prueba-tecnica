import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalDataContext } from '@/store/hooks';
import { makeLocalAuthentication } from '@/main/factories';
import { useForm } from './useForm';

export const useLoginForm = () => {
  const [error, setError] = useState<Error | null>(null);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  const [loginData, handleChange] = useForm({
    email: '',
    password: '',
  });

  const { setUser } = useGlobalDataContext();
  const navigate = useNavigate();
  const authentication = useMemo(() => makeLocalAuthentication(), []);

  useEffect(() => {
    setButtonIsDisabled(
      loginData.email.length < 6 || loginData.password.length < 6
    );
  }, [loginData]);

  const handleSubmit = async () => {
    setButtonIsDisabled(true);
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

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalDataContext } from '@/store/hooks';
import { makeLocalAuthentication } from '@/main/factories';

const loginDataInitialValue = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const [loginData, setLoginData] = useState(loginDataInitialValue);
  const [error, setError] = useState<Error | null>(null);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  const { setUser } = useGlobalDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginData.email.length < 6 || loginData.password.length < 6) {
      setButtonIsDisabled(true);
    } else setButtonIsDisabled(false);
  }, [loginData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

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

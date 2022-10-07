import { makeLocalAuthentication } from '@/main/factories';
import { useGlobalDataContext } from '@/store/hooks';
import { useEffect, useState } from 'react';

const loginDataInitialValue = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const [loginData, setLoginData] = useState(loginDataInitialValue);
  const [error, setError] = useState<Error | null>(null);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

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
    const { setUser } = useGlobalDataContext();
    const authentication = makeLocalAuthentication();

    try {
      const response = await authentication.auth(loginData);
      setUser(response);
    } catch (error) {
      setButtonIsDisabled(false);
      setError(error as Error);
    }
  };

  return { loginData, error, handleChange, handleSubmit, buttonIsDisabled };
};

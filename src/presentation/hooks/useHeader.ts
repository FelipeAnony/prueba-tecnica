import { useGlobalDataContext } from '@/store/hooks';
import { useNavigate } from 'react-router-dom';

export const useHeader = () => {
  const { user, setUser } = useGlobalDataContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return { user, handleLogout };
};

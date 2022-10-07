import { useContext } from 'react';
import { GlobalDataContext } from '../contexts/globalDataContext';

export const useGlobalDataContext = () => {
  return useContext(GlobalDataContext);
};

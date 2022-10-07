import { useContext } from 'react';
import { GlobalDataContext } from '../contexts/globalData';

export const useGlobalDataContext = () => {
  return useContext(GlobalDataContext);
};

import { AccountModel } from '@/domain/models';
import { createContext, useState } from 'react';

type GlobalDataType = {
  user: AccountModel | null;
  setUser: React.Dispatch<React.SetStateAction<AccountModel | null>>;
};

export const GlobalDataContext = createContext<GlobalDataType>({
  user: null,
  setUser: () => {},
});

type Props = {
  children: JSX.Element;
};

export const GlobalDataProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<AccountModel | null>(null);

  return (
    <GlobalDataContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalDataContext.Provider>
  );
};

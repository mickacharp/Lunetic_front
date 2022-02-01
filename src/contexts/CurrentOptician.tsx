import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

type OpticianContent = {
  idOptician: number;
  setIdOptician: React.Dispatch<React.SetStateAction<number>>;
  admin: boolean;
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

type Props = { children: JSX.Element };

const CurrentOpticianContext = createContext<OpticianContent>({
  idOptician: 0,
  setIdOptician: () => {},
  admin: false,
  setAdmin: () => {},
  logout: () => {},
});

export const CurrentOpticianContextProvider: React.FC<Props> = ({ children }) => {
  const [idOptician, setIdOptician] = useState<number>(0);
  const [admin, setAdmin] = useState<boolean>(false);
  const removeCookie = useCookies(['optician_token'])[2];

  const logout = (): void => {
    setIdOptician(0);
    setAdmin(false);
    removeCookie('optician_token');
  };

  return (
    <CurrentOpticianContext.Provider
      value={{
        idOptician,
        setIdOptician,
        logout,
        admin,
        setAdmin,
      }}>
      {children}
    </CurrentOpticianContext.Provider>
  );
};

export default CurrentOpticianContext;

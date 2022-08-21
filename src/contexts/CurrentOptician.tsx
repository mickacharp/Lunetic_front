import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

type OpticianContent = {
  idOptician: number;
  setIdOptician: React.Dispatch<React.SetStateAction<number>>;
  logout: () => void;
};

type Props = { children: JSX.Element };

const CurrentOpticianContext = createContext<OpticianContent>({
  idOptician: 0,
  setIdOptician: () => {},
  logout: () => {},
});

export const CurrentOpticianContextProvider: React.FC<Props> = ({ children }) => {
  const [idOptician, setIdOptician] = useState<number>(0);
  const removeCookie = useCookies(['optician_token'])[2];

  const logout = (): void => {
    setIdOptician(0);
    removeCookie('optician_token');
  };

  return (
    <CurrentOpticianContext.Provider
      value={{
        idOptician,
        setIdOptician,
        logout,
      }}>
      {children}
    </CurrentOpticianContext.Provider>
  );
};

export default CurrentOpticianContext;

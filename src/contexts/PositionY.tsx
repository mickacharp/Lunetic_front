import React, { createContext, useState } from 'react';

type PositionYContent = {
  numberDiv1: number;
  setNumberDiv1: React.Dispatch<React.SetStateAction<number>>;
  numberDiv2: number;
  setNumberDiv2: React.Dispatch<React.SetStateAction<number>>;
  numberDiv3: number;
  setNumberDiv3: React.Dispatch<React.SetStateAction<number>>;
  numberDiv4: number;
  setNumberDiv4: React.Dispatch<React.SetStateAction<number>>;
  numberDiv5: number;
  setNumberDiv5: React.Dispatch<React.SetStateAction<number>>;
  scroll: number;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
  test: number;
  setTest: React.Dispatch<React.SetStateAction<number>>;
};

type Props = { children: JSX.Element };

const PositionYContext = createContext<PositionYContent>({
  numberDiv1: 0,
  setNumberDiv1: () => {},
  numberDiv2: 0,
  setNumberDiv2: () => {},
  numberDiv3: 0,
  setNumberDiv3: () => {},
  numberDiv4: 0,
  setNumberDiv4: () => {},
  numberDiv5: 0,
  setNumberDiv5: () => {},
  scroll: 0,
  setScroll: () => {},
  test: 0,
  setTest: () => {},
});

export const PositionYContextProvider: React.FC<Props> = ({ children }) => {
  const [numberDiv1, setNumberDiv1] = useState<number>(0);
  const [numberDiv2, setNumberDiv2] = useState<number>(0);
  const [numberDiv3, setNumberDiv3] = useState<number>(0);
  const [numberDiv4, setNumberDiv4] = useState<number>(0);
  const [numberDiv5, setNumberDiv5] = useState<number>(0);
  const [scroll, setScroll] = useState<number>(1);
  const [test, setTest] = useState<number>(0);

  // Permit to detect the scroll and his value
  const handleScroll = () => {
    setTest(window.scrollY);
  };

  // Change the value of the state according to the value of the scrollY
  const handleStateScroll = () => {
    if (numberDiv5 !== 0) {
      if (test <= numberDiv2) {
        setScroll(1);
      } else if (test <= Math.floor(numberDiv3)) {
        setScroll(2);
      } else if (test <= Math.floor(numberDiv4)) {
        setScroll(3);
      } else if (test <= Math.floor(numberDiv5)) {
        setScroll(4);
      } else {
        setScroll(5);
      }
    } else if (numberDiv3 !== 0) {
      if (test <= numberDiv2) {
        setScroll(1);
      } else if (test <= Math.floor(numberDiv3)) {
        setScroll(2);
      } else if (test <= Math.floor(numberDiv4)) {
        setScroll(3);
      } else {
        setScroll(4);
      }
    } else {
      if (test <= numberDiv2) {
        setScroll(1);
      } else {
        setScroll(2);
      }
    }
  };

  window.addEventListener('wheel', () => {
    handleScroll();
    handleStateScroll();
  });

  return (
    <PositionYContext.Provider
      value={{
        numberDiv1,
        setNumberDiv1,
        numberDiv2,
        setNumberDiv2,
        numberDiv3,
        setNumberDiv3,
        numberDiv4,
        setNumberDiv4,
        numberDiv5,
        setNumberDiv5,
        scroll,
        setScroll,
        test,
        setTest,
      }}>
      {children}
    </PositionYContext.Provider>
  );
};

export default PositionYContext;

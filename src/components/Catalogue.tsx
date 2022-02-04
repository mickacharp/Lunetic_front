import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import lunettesArthur from '../assets/LUNETTE_03_ARTHUR.png';
import PositionYContext from '../contexts/PositionY';
import ModelCardList from './ModelCardList';
import Sidebar from './Sidebar';

const Catalogue = () => {
  // set scroll to 0 when changing page
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { setNumberDiv1, setNumberDiv2 } = useContext(PositionYContext);

  return (
    <>
      <Sidebar anchor={2} />
      <div
        className="catalogue"
        id="1"
        ref={(el) => {
          if (!el) return;
          setNumberDiv1(el.getBoundingClientRect().top);
        }}>
        <img
          src={lunettesArthur}
          alt="lunettes en-tête catalogue"
          className="catalogue__img"
        />
        <h1
          className="catalogue__title"
          id="2"
          ref={(el) => {
            if (!el) return;
            setNumberDiv2(el.getBoundingClientRect().top);
          }}>
          Catalogue
        </h1>
        <ModelCardList />
      </div>
    </>
  );
};

export default Catalogue;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import lunettesArthur from '../assets/LUNETTE_03_ARTHUR.png';
import ModelCardList from './ModelCardList';
import Sidebar from './Sidebar';

const Catalogue = () => {
  // set scroll to 0 when changing page
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Sidebar anchor={2} />
      <div className="catalogue" id="1">
        <img
          src={lunettesArthur}
          alt="lunettes en-tête catalogue"
          className="catalogue__img"
        />
        <h1 className="catalogue__title" id="2">
          Catalogue
        </h1>
        <ModelCardList />
      </div>
    </>
  );
};

export default Catalogue;

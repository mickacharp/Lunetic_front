import React, { useContext } from 'react';

import lunettesArthur from '../assets/LUNETTE_03_ARTHUR.png';
import ModelCardList from './ModelCardList';
import Sidebar from './Sidebar';

const Catalogue = () => {
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

import React from 'react';

import lunettesArthur from '../assets/LUNETTE_03_ARTHUR.png';
import ModelCardList from './ModelCardList';
import Sidebar from './Sidebar';

const Catalogue = () => {
  return (
    <div className="catalogue">
      <img
        src={lunettesArthur}
        alt="lunettes en-tête catalogue"
        className="catalogue__img"
      />
      <h1 className="catalogue__title">Catalogue</h1>
      <ModelCardList />
      <Sidebar />
    </div>
  );
};

export default Catalogue;

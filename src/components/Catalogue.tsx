import React from "react";
import ModelCardList from "./ModelCardList";
import lunettesArthur from '../assets/LUNETTE_03_ARTHUR.png';

const Catalogue = () => {
  return (
    <div className="catalogue">
        <img src={lunettesArthur} alt="lunettes en-tête catalogue" className="catalogue__img"/>
        <h1>Catalogue</h1>
        <ModelCardList />
    </div>
  )
}

export default Catalogue;

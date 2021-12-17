import React from 'react';

import lunettesEric from '../assets/LUNETTE_01_ERIC.png';

const ModelCard = () => {
  return (
    <div className="modelcard">
      <h2>Titre #</h2>
      <img src={lunettesEric} alt="lunettes Eric" className="modelcard__img" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat officiis
        placeat qui, nesciunt ab delectus cumque culpa molestiae adipisci inventore minima
        maxime saepe molestias! Autem ad dicta cupiditate rem.
      </p>
      <button className="modelcard__button">PLUS D&apos;INFORMATIONS</button>
    </div>
  );
};

export default ModelCard;

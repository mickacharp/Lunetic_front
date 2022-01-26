import React from 'react';
import { Link } from 'react-router-dom';
import lunettesEric from '../assets/LUNETTE_01_ERIC.png';

const ModelCard = () => {
  return (
    <div className="modelcard">
      <h2 className="modelcard__title">Titre #</h2>
      <img src={lunettesEric} alt="lunettes Eric" className="modelcard__img" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat officiis
        placeat qui, nesciunt ab delectus cumque culpa molestiae adipisci inventore minima
        maxime saepe molestias! Autem ad dicta cupiditate rem.
      </p>
      <Link to="/modal-info">
        <button className="modelcard__button">PLUS D&apos;INFORMATIONS</button>
      </Link>
    </div>
  );
};

export default ModelCard;

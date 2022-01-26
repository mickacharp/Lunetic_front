import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const ModelCard = ({ idModel, name, mainImg, text }) => {
  return (
    <div className="modelcard">
      <h2 className="modelcard__title">{name}</h2>
      <img src={mainImg} alt={name} className="modelcard__img" />
      <p>{text}</p>
      <Link to={`/catalogue/models/${idModel}`}>
        <button className="modelcard__button">PLUS D&apos;INFORMATIONS</button>
      </Link>
    </div>
  );
};

export default ModelCard;

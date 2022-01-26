import React from 'react';
import { Link } from 'react-router-dom';
import glassesEric from '../assets/LUNETTE_01_ERIC.png';
import glassesArthur from '../assets/LUNETTE_03_ARTHUR.png';

const ModalInfo = () => {
  return (
    <div className="modal-info">
      <div className="modal-info__content">
        <Link to="/catalogue">
          <div className="modal-info__close">
            <p>Fermer</p>
          </div>
        </Link>
        <div className="modal-info__img">
          <div className="modal-info__img--eric">
            <img src={glassesEric} alt="glasses-eric" />
          </div>
          <div className="modal-info__img--arthur--1">
            <img src={glassesArthur} alt="glasses-arthur" />
          </div>
          <div className="modal-info__img--arthur--2">
            <img src={glassesArthur} alt="glasses-arthur" />
          </div>
          <div className="modal-info__img--arthur--3">
            <img src={glassesArthur} alt="glasses-arthur" />
          </div>
          <div className="modal-info__img--arthur--4">
            <img src={glassesArthur} alt="glasses-arthur" />
          </div>
        </div>
        <div className="modal-info__text">
          <p className="title">Monture xxxxx</p>
          <p className="greyC4 uppercase">Specifics</p>
          <p className="uppercase">Adjustable cuffs, back vent, two side pockets</p>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;

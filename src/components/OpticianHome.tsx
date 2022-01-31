import React from 'react';
import { Link } from 'react-router-dom';
import littleGout from '../assets/gout-little.png';
import pictoRondLunette from '../assets/PICTO_ROND_LUNETTE.png';
import ModalWishlists from './ModalWishlists';

const OpticianHome = () => {
  return (
    <div className="optician_home_component_container">
      <div className="optician_home">
        <Link to="/">
          <p id="close" className="login-container__close">
            FERMER
          </p>
        </Link>
        <div className="optician_home__img_goutte_container">
          <img src={littleGout} alt="" />
        </div>

        <div className="optician_home__select">
          <div className="optician_home__selectTop">
            <Link to="/optician-profile">
              <div className="optician_home__profilDiv">
                <h4>Profil</h4>
                <img src={pictoRondLunette} alt="" />
              </div>
            </Link>
            <Link to="/optician-orders">
              <div className="optician_home__comandDiv">
                <h4>Commandes</h4>
                <img src={pictoRondLunette} alt="" />
              </div>
            </Link>
          </div>
          <Link to={''}>
            <div className="optician_home__wishlistDiv">
              <h4>Liste d'envie</h4>
              <img src={pictoRondLunette} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpticianHome;

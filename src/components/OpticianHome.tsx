import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import littleGout from '../assets/gout-little.png';
import pictoRondLunette from '../assets/PICTO_ROND_LUNETTE.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import Sidebar from './Sidebar';

const OpticianHome = () => {
  const { idOptician } = useContext(CurrentOpticianContext);

  return (
    <>
      <Sidebar anchor={0} />
      <div className="optician_home_component_container">
        {idOptician == 0 ? (
          <div className="optician_home__please-login">
            <p className="details-wishlist__please-connect">
              <Link to="/login">
                <strong>Connectez-vous</strong>
              </Link>{' '}
              pour accéder à votre profil
            </p>
          </div>
        ) : (
          <div className="optician_home">
            <Link to="/">
              <p id="close" className="optician_home__close">
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
              <Link to={`/opticians/${idOptician}/wishlists`}>
                <div className="optician_home__wishlistDiv">
                  <h4>Liste de souhaits</h4>
                  <img src={pictoRondLunette} alt="" />
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OpticianHome;

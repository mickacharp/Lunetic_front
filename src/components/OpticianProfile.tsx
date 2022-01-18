import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import pictoGoutte from '../assets/PICTO GOUTTE_fond blanc_Plan de travail 1.png';
import profileLocation from '../assets/profile-location.png';
import profileQuote from '../assets/profile-quotes.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import IOptician from '../interfaces/IOptician';

const OpticianProfile = () => {
  const [opticianInfo, setOpticianInfo] = useState<IOptician>();
  const { idOptician } = useContext(CurrentOpticianContext);

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (idOptician != 0) {
      axios
        .get(`http://localhost:7000/api/opticians/${idOptician}`)
        .then((results) => results.data)
        .then((data) => setOpticianInfo(data));
    }
  }, [idOptician]);

  return (
    <>
      <div className="profile-component-container">
        {idOptician == 0 ? (
          <p className="please-connect">Connectez-vous pour accéder à votre profil</p>
        ) : (
          <div className="optician-profile">
            <div className="optician-profile__info">
              <div className="optician-profile__info-img-container">
                <img
                  src={opticianInfo?.link_picture}
                  alt="profil opticien partenaire Lunetic"
                  className="optician-profile__info-img"
                />
              </div>
              <hr />
              <div className="optician-profile__info-containers">
                <img
                  src={profileLocation}
                  alt="illustration marqueur carte"
                  className="optician-profile__info-icons"
                />
                <p>
                  Adresse : {opticianInfo?.address}
                  <br />
                  Ville : {opticianInfo?.city}, {opticianInfo?.postal_code}
                  <br />
                </p>
              </div>
              <hr />
              <div className="optician-profile__info-containers">
                <img
                  src={profileQuote}
                  alt="illustration guillemets quote"
                  className="optician-profile__info-icons"
                />
                <p>
                  Email : {opticianInfo?.email}
                  <br />
                  Fixe : {opticianInfo?.home_phone}
                  <br />
                  Mobile : {opticianInfo?.mobile_phone}
                </p>
              </div>
              <hr />
              <div className="optician-profile__info-containers">
                <img
                  src={profileQuote}
                  alt="illustration guillemets quote"
                  className="optician-profile__info-icons"
                />
                <p>
                  Code FINESS : {opticianInfo?.finess_code}
                  <br />
                  SIRET : {opticianInfo?.siret}
                  <br />
                  Num TVA : {opticianInfo?.vat_number}
                </p>
              </div>
            </div>

            <div className="optician-profile__store">
              <p className="optician-profile__close" onClick={() => navigate(-1)}>
                FERMER
              </p>
              <h1 className="optician-profile__store-name">{opticianInfo?.company}</h1>
              <img
                src={pictoGoutte}
                alt="logo goutte Lunetic"
                className="optician-profile__store-img"
              />
              <input
                type="button"
                value="Éditer votre profil"
                className="optician-profile__edit"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OpticianProfile;

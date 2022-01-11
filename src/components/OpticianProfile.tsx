import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

import pictoGoutte from '../assets/PICTO GOUTTE_fond blanc_Plan de travail 1.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import IOptician from '../interfaces/IOptician';
import Sidebar from './Sidebar';

const OpticianProfile = () => {
  const [opticianInfo, setOpticianInfo] = useState<IOptician>();
  const { idOptician } = useContext(CurrentOpticianContext);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/opticians/${idOptician}`)
      .then((results) => results.data)
      .then((data) => setOpticianInfo(data));
  }, [idOptician]);

  return (
    <div className="optician-profile">
      <div className="optician-profile__info">
        <div className="optician-profile__info-img-container">
          <img
            src={pictoGoutte}
            alt="profil opticien partenaire Lunetic"
            className="optician-profile__info-img"
          />
        </div>
        <hr />
        <div className="optician-profile__address">
          <p>
            123 Fluffypants Lane
            <br />
            Pawtown, FL 32789
            <br />
            123-468-8901
          </p>
        </div>
        <hr />
        <div className="optician-profile__contact">
          <p>
            {opticianInfo && opticianInfo.email}
            <br />
            05 59 59 59 59
            <br />
            06 10 20 30 40
          </p>
        </div>
        <hr />
        <div className="optician-profile__administration">
          <p>
            Code FINESS
            <br />
            Siret
            <br />
            Num TVA
          </p>
        </div>
      </div>

      <div className="optician-profile__store">
        <p className="optician-profile__close">FERMER</p>
        <h1 className="optician-profile__store-name">Nom Magasin</h1>
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
      <Sidebar />
    </div>
  );
};

export default OpticianProfile;

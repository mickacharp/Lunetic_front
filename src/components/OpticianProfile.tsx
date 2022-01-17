import axios from 'axios';
import React, { MouseEventHandler, useContext, useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import pictoGoutte from '../assets/PICTO GOUTTE_fond blanc_Plan de travail 1.png';
import profileLocation from '../assets/profile-location.png';
import profileQuote from '../assets/profile-quotes.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';
import IOptician from '../interfaces/IOptician';

const OpticianProfile = () => {
  const [opticianInfo, setOpticianInfo] = useState<IOptician>();
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const [saveEdits, setSaveEdits] = useState<boolean>(true);

  const [newLinkPicture, setNewLinkPicture] = useState<string>();
  const [newCompany, setNewCompany] = useState<string>();
  const [newAddress, setNewAddress] = useState<string>();
  const [newCity, setNewCity] = useState<string>();
  const [newPostalCode, setNewPostalCode] = useState<string>();
  const [newEmail, setNewEmail] = useState<string>();
  const [newHomePhone, setNewHomePhone] = useState<string>();
  const [newMobilePhone, setNewMobilePhone] = useState<string>();
  const [newFinessCode, setNewFinessCode] = useState<string>();
  const [newSiret, setNewSiret] = useState<string>();
  const [newVatNumber, setNewVatNumber] = useState<string>();

  const { idOptician } = useContext(CurrentOpticianContext);

  const navigate: NavigateFunction = useNavigate();

  const resetStates: Function = () => {
    setNewLinkPicture(undefined);
    setNewCompany(undefined);
    setNewAddress(undefined);
    setNewCity(undefined);
    setNewPostalCode(undefined);
    setNewEmail(undefined);
    setNewHomePhone(undefined);
    setNewMobilePhone(undefined);
    setNewFinessCode(undefined);
    setNewSiret(undefined);
    setNewVatNumber(undefined);
  };

  useEffect(() => {
    if (idOptician != 0) {
      axios
        .get(`http://localhost:7000/api/opticians/${idOptician}`)
        .then((results) => results.data)
        .then((data) => setOpticianInfo(data));
    }
  }, [idOptician, saveEdits]);

  const updateOptician = () => {
    axios.put(
      `http://localhost:7000/api/opticians/${idOptician}`,
      {
        company: newCompany,
        address: newAddress,
        postal_code: newPostalCode,
        city: newCity,
        email: newEmail,
        mobile_phone: newMobilePhone,
        home_phone: newHomePhone,
        finess_code: newFinessCode,
        siret: newSiret,
        vat_number: newVatNumber,
      },
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );
  };

  return (
    <>
      <div className="profile-component-container">
        {idOptician == 0 ? (
          <p className="please-connect">Connectez-vous pour accéder à votre profil</p>
        ) : (
          <div className="optician-profile">
            <div className="optician-profile__store">
              <div className="optician-profile__info-img-container">
                <img
                  src={opticianInfo?.link_picture}
                  alt="profil opticien partenaire Lunetic"
                  className="optician-profile__info-img"
                />
              </div>
              <hr />
              <h1 className="optician-profile__store-name">
                {editProfile && saveEdits ? (
                  <input
                    type="text"
                    placeholder={`${opticianInfo?.company}`}
                    onChange={(e) => setNewCompany(e.target.value)}
                  />
                ) : (
                  opticianInfo?.company
                )}
              </h1>
              <img
                src={pictoGoutte}
                alt="logo goutte Lunetic"
                className="optician-profile__store-img"
              />
            </div>

            <div className="optician-profile__info">
              <p className="optician-profile__close" onClick={() => navigate(-1)}>
                FERMER
              </p>
              <div className="optician-profile__info-containers">
                <img
                  src={profileLocation}
                  alt="illustration marqueur carte"
                  className="optician-profile__info-icons"
                />
                <p>
                  Adresse :{' '}
                  {editProfile && saveEdits ? (
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.address}`}
                      onChange={(e) => setNewAddress(e.target.value)}
                    />
                  ) : (
                    opticianInfo?.address
                  )}
                  <br />
                  Ville :{' '}
                  {editProfile && saveEdits ? (
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.city}`}
                      onChange={(e) => setNewCity(e.target.value)}
                    />
                  ) : (
                    opticianInfo?.city
                  )}
                  ,{' '}
                  {editProfile && saveEdits ? (
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.postal_code}`}
                      onChange={(e) => setNewPostalCode(e.target.value)}
                    />
                  ) : (
                    opticianInfo?.postal_code
                  )}
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
                  Email :{' '}
                  {editProfile && saveEdits ? (
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.email}`}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                  ) : (
                    opticianInfo?.email
                  )}
                  <br />
                  Fixe :{' '}
                  {editProfile && saveEdits ? (
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.home_phone}`}
                      onChange={(e) => setNewHomePhone(e.target.value)}
                    />
                  ) : (
                    opticianInfo?.home_phone
                  )}
                  <br />
                  Mobile :{' '}
                  {editProfile && saveEdits ? (
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.mobile_phone}`}
                      onChange={(e) => setNewMobilePhone(e.target.value)}
                    />
                  ) : (
                    opticianInfo?.mobile_phone
                  )}
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
                  Code FINESS :{' '}
                  {editProfile && saveEdits ? (
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.finess_code}`}
                      onChange={(e) => setNewFinessCode(e.target.value)}
                    />
                  ) : (
                    opticianInfo?.finess_code
                  )}
                  <br />
                  SIRET :{' '}
                  {editProfile && saveEdits ? (
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.siret}`}
                      onChange={(e) => setNewSiret(e.target.value)}
                    />
                  ) : (
                    opticianInfo?.siret
                  )}
                  <br />
                  Num TVA :{' '}
                  {editProfile && saveEdits ? (
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.vat_number}`}
                      onChange={(e) => setNewVatNumber(e.target.value)}
                    />
                  ) : (
                    opticianInfo?.vat_number
                  )}
                </p>
              </div>

              {!editProfile ? (
                <input
                  type="button"
                  value="Éditer votre profil"
                  className="optician-profile__edit"
                  onClick={() => {
                    setEditProfile(!editProfile);
                    resetStates();
                    !saveEdits && setSaveEdits(true);
                  }}
                />
              ) : saveEdits ? (
                <>
                  {!newCompany &&
                  !newAddress &&
                  !newCity &&
                  !newPostalCode &&
                  !newEmail &&
                  !newHomePhone &&
                  !newMobilePhone &&
                  !newFinessCode &&
                  !newSiret &&
                  !newVatNumber ? (
                    ''
                  ) : (
                    <input
                      type="button"
                      value="Sauvegarder les modifications"
                      className="optician-profile__save-changes"
                      onClick={() => {
                        setSaveEdits(!saveEdits);
                      }}
                    />
                  )}
                  <input
                    type="button"
                    value="Abandonner les modifications"
                    className="optician-profile__edit"
                    onClick={() => {
                      setEditProfile(!editProfile);
                    }}
                  />{' '}
                </>
              ) : (
                <input
                  type="button"
                  value="Valider"
                  className="optician-profile__edit"
                  onClick={() => {
                    setEditProfile(!editProfile);
                    updateOptician();
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OpticianProfile;

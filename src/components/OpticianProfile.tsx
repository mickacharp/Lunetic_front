import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

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

  // this function will reinitialize states
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
        .get(`http://localhost:4000/api/opticians/${idOptician}`)
        .then((results) => results.data)
        .then((data) => setOpticianInfo(data));
    }
  }, [idOptician, saveEdits, editProfile]);

  // this function will update an optician with the new modified data
  const updateOptician = () => {
    axios.put(
      `http://localhost:4000/api/opticians/${idOptician}`,
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
        link_picture: newLinkPicture,
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
        {/* if an optician is not logged in and manage to get on optician-profile page, it will display
        a message telling him to log in */}
        {idOptician == 0 ? (
          <p className="please-connect">
            <Link to="/login">
              <strong>Connectez-vous</strong>
            </Link>{' '}
            pour accéder à votre profil
          </p>
        ) : (
          <div className="optician-profile">
            <div className="optician-profile__store-name">
              <h1>
                {editProfile ? (
                  <input
                    type="text"
                    placeholder={`${opticianInfo?.company}`}
                    onChange={(e) => setNewCompany(e.target.value)}
                    readOnly={saveEdits ? false : true}
                  />
                ) : (
                  opticianInfo?.company
                )}
              </h1>
            </div>
            <div className="optician-profile__data-container">
              <div className="optician-profile__info-texts-container">
                {/* navigate(-1) allows to go on previous page */}
                <p
                  className="optician-profile__close"
                  onClick={() => navigate(-1)}
                  onKeyPress={() => navigate(-1)}
                  tabIndex={0}
                  role="button"
                  aria-pressed="false">
                  FERMER
                </p>

                <div className="optician-profile__info-subcontainers">
                  <img
                    src={profileLocation}
                    alt="illustration marqueur carte"
                    className="optician-profile__info-icons"
                  />
                  <p>
                    Adresse :{' '}
                    {editProfile ? (
                      <input
                        type="text"
                        placeholder={`${opticianInfo?.address}`}
                        onChange={(e) => setNewAddress(e.target.value)}
                        readOnly={saveEdits ? false : true}
                      />
                    ) : (
                      opticianInfo?.address
                    )}
                    <br />
                    Ville :{' '}
                    {editProfile ? (
                      <input
                        type="text"
                        placeholder={`${opticianInfo?.city}`}
                        onChange={(e) => setNewCity(e.target.value)}
                        readOnly={saveEdits ? false : true}
                      />
                    ) : (
                      opticianInfo?.city
                    )}
                    ,{' '}
                    {editProfile ? (
                      <input
                        type="text"
                        placeholder={`${opticianInfo?.postal_code}`}
                        onChange={(e) => setNewPostalCode(e.target.value)}
                        readOnly={saveEdits ? false : true}
                      />
                    ) : (
                      opticianInfo?.postal_code
                    )}
                    <br />
                  </p>
                </div>
                <hr />
                <div className="optician-profile__info-subcontainers">
                  <img
                    src={profileQuote}
                    alt="illustration guillemets quote"
                    className="optician-profile__info-icons"
                  />
                  <p>
                    Email :{' '}
                    {editProfile ? (
                      <input
                        type="text"
                        placeholder={`${opticianInfo?.email}`}
                        onChange={(e) => setNewEmail(e.target.value)}
                        readOnly={saveEdits ? false : true}
                      />
                    ) : (
                      opticianInfo?.email
                    )}
                    <br />
                    Fixe :{' '}
                    {editProfile ? (
                      <input
                        type="text"
                        placeholder={`${opticianInfo?.home_phone}`}
                        onChange={(e) => setNewHomePhone(e.target.value)}
                        readOnly={saveEdits ? false : true}
                      />
                    ) : (
                      opticianInfo?.home_phone
                    )}
                    <br />
                    Mobile :{' '}
                    {editProfile ? (
                      <input
                        type="text"
                        placeholder={`${opticianInfo?.mobile_phone}`}
                        onChange={(e) => setNewMobilePhone(e.target.value)}
                        readOnly={saveEdits ? false : true}
                      />
                    ) : (
                      opticianInfo?.mobile_phone
                    )}
                  </p>
                </div>
                <hr />
                <div className="optician-profile__info-subcontainers">
                  <img
                    src={profileQuote}
                    alt="illustration guillemets quote"
                    className="optician-profile__info-icons"
                  />
                  <p>
                    Code FINESS :{' '}
                    {editProfile ? (
                      <input
                        type="text"
                        placeholder={`${opticianInfo?.finess_code}`}
                        onChange={(e) => setNewFinessCode(e.target.value)}
                        readOnly={saveEdits ? false : true}
                      />
                    ) : (
                      opticianInfo?.finess_code
                    )}
                    <br />
                    SIRET :{' '}
                    {editProfile ? (
                      <input
                        type="text"
                        placeholder={`${opticianInfo?.siret}`}
                        onChange={(e) => setNewSiret(e.target.value)}
                        readOnly={saveEdits ? false : true}
                      />
                    ) : (
                      opticianInfo?.siret
                    )}
                    <br />
                    Num TVA :{' '}
                    {editProfile ? (
                      <input
                        type="text"
                        placeholder={`${opticianInfo?.vat_number}`}
                        onChange={(e) => setNewVatNumber(e.target.value)}
                        readOnly={saveEdits ? false : true}
                      />
                    ) : (
                      opticianInfo?.vat_number
                    )}
                  </p>
                </div>
              </div>

              <div className="optician-profile__info-img-container">
                <div className="optician-profile__profile-picture-container">
                  <img
                    src={opticianInfo?.link_picture}
                    alt="profil opticien partenaire Lunetic"
                    className="optician-profile__profile-picture"
                  />
                </div>
                {editProfile && (
                  <>
                    <p>Adresse de la nouvelle image :</p>
                    <input
                      type="text"
                      placeholder={`${opticianInfo?.link_picture}`}
                      onChange={(e) => setNewLinkPicture(e.target.value)}
                      readOnly={saveEdits ? false : true}
                    />
                  </>
                )}
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
                <div>
                  {!newCompany &&
                  !newAddress &&
                  !newCity &&
                  !newPostalCode &&
                  !newEmail &&
                  !newHomePhone &&
                  !newMobilePhone &&
                  !newFinessCode &&
                  !newSiret &&
                  !newVatNumber &&
                  !newLinkPicture ? (
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
                </div>
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

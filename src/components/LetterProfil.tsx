import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import letter from '../assets/letter.png';
import profil from '../assets/profil.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';

const LetterProfil = () => {
  const { idOptician } = useContext(CurrentOpticianContext);
  return (
    <>
      <Link to="/contact">
        <div className="sidebar__letter">
          <div className="sidebar__box">
            <img src={letter} alt="letter" />
            <p>Contact</p>
          </div>
        </div>
      </Link>

      <Link to={idOptician == 0 ? '/login' : '/optician-home'}>
        <div className="sidebar__profil">
          <div className="sidebar__box">
            <img src={profil} alt="profil" />
            {idOptician != 0 ? <p>Mon compte</p> : <p>Se connecter</p>}
          </div>
        </div>
      </Link>
    </>
  );
};

export default LetterProfil;

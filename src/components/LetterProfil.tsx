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
          </div>
        </div>
      </Link>

      <Link to={idOptician == 0 ? '/login' : '/optician-profile'}>
        <div className="sidebar__profil">
          <div className="sidebar__box">
            <img src={profil} alt="profil" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default LetterProfil;

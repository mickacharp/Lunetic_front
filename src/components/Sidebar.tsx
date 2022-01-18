import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import letter from '../assets/letter.png';
import profil from '../assets/profil.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';

const Sidebar = () => {
  const { idOptician } = useContext(CurrentOpticianContext);
  return (
    <div className="sidebar">
      <Link to="/contact">
        <div className="letter">
          <div className="box">
            <img src={letter} alt="letter" />
          </div>
        </div>
      </Link>

      <Link to={idOptician == 0 ? '/login' : '/optician-profile'}>
        <div className="profil">
          <div className="box">
            <img src={profil} alt="profil" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

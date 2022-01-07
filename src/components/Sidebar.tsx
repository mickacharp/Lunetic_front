import React from 'react';
import { Link } from 'react-router-dom';

import letter from '../assets/letter.png';
import profil from '../assets/profil.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/login">
        <div className="letter">
          <div className="box">
            <img src={letter} alt="letter" />
          </div>
        </div>
      </Link>
      <div className="profil">
        <div className="box">
          <img src={profil} alt="profil" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

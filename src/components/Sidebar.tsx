import React from 'react';

import letter from '../assets/letter.png';
import profil from '../assets/profil.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="letter">
        <div className="box">
          <img src={letter} alt="letter" />
        </div>
      </div>
      <div className="profil">
        <div className="box">
          <img src={profil} alt="profil" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import logo from '../assets/LUNETIC.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo-lunetic" />
      </div>
      <div className="test">
        <div className="navbar__menu">
          <ul>
            <li>Home</li>
            <li>Concept</li>
            <li>Opticiens</li>
            <li>Nous</li>
            <li>Où nous trouver</li>
            <li>News</li>
          </ul>
        </div>
        <div className="navbar__menu-burger">
          <div className="navbar__box">
            <div className="navbar__line" />
            <div className="navbar__middle-line" />
            <div className="navbar__line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

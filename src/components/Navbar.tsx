import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/LUNETIC.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo-lunetic" />
        </Link>
      </div>
      <div className="navbar__container">
        <div className="navbar__menu">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/montures">
              <li>Montures</li>
            </Link>
            <Link to="/catalogue">
              <li>Catalogue</li>
            </Link>
            <Link to="/opticians">
              <li>Opticiens</li>
            </Link>
            <Link to="/concept">
              <li>Concept</li>
            </Link>
            <Link to="/us">
              <li>Nous</li>
            </Link>
            <Link to="/find-us">
              <li>Où nous trouver</li>
            </Link>
            <Link to="/news">
              <li>News</li>
            </Link>
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

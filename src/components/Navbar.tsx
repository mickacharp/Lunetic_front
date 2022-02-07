import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/LUNETIC.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  console.log(showLinks);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo-lunetic" />
        </Link>
      </div>
      <div className="navbar__container">
        {/* <div className="navbar__menu"> */}
        <div className={`navbar__menu ${showLinks ? 'show-nav' : 'hide-nav'}`}>
          <ul>
            <Link to="/">
              <li>Accueil</li>
            </Link>
            <Link to="/models">
              <li>Montures</li>
            </Link>
            <Link to="/catalogue">
              <li>Catalogue</li>
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
        <div
          className="navbar__menu-burger"
          onClick={handleShowLinks}
          onKeyDown={handleShowLinks}
          aria-hidden="true">
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

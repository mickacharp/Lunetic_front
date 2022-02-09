import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import letter from '../assets/letter.png';
import logo from '../assets/LUNETIC.png';
import profil from '../assets/profil.png';
import CurrentOpticianContext from '../contexts/CurrentOptician';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { idOptician } = useContext(CurrentOpticianContext);

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
        <div className={`navbar__menu ${showLinks ? 'show-nav' : 'hide-nav'}`}>
          <ul>
            <Link to="/" onClick={handleShowLinks} onKeyDown={handleShowLinks}>
              <li>Accueil</li>
            </Link>
            <Link to="/models" onClick={handleShowLinks} onKeyDown={handleShowLinks}>
              <li>Montures</li>
            </Link>
            <Link to="/catalogue" onClick={handleShowLinks} onKeyDown={handleShowLinks}>
              <li>Catalogue</li>
            </Link>
            <Link to="/concept" onClick={handleShowLinks} onKeyDown={handleShowLinks}>
              <li>Concept</li>
            </Link>
            <Link to="/us" onClick={handleShowLinks} onKeyDown={handleShowLinks}>
              <li>Nous</li>
            </Link>
            <Link to="/find-us" onClick={handleShowLinks} onKeyDown={handleShowLinks}>
              <li>Où nous trouver</li>
            </Link>
            <Link to="/news" onClick={handleShowLinks} onKeyDown={handleShowLinks}>
              <li>News</li>
            </Link>
          </ul>
          <div className="navbar__contact_profil">
            <Link to="/contact" onClick={handleShowLinks} onKeyDown={handleShowLinks}>
              <div className="sidebar__letter">
                <div className="sidebar__box">
                  <img src={letter} alt="letter" />
                  <p>Contact</p>
                </div>
              </div>
            </Link>

            <Link
              to={idOptician == 0 ? '/login' : '/optician-home'}
              onClick={handleShowLinks}
              onKeyDown={handleShowLinks}>
              <div className="sidebar__profil">
                <div className="sidebar__box">
                  <img src={profil} alt="profil" />
                  {idOptician != 0 ? <p>Mon compte</p> : <p>Se connecter</p>}
                </div>
              </div>
            </Link>
          </div>
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

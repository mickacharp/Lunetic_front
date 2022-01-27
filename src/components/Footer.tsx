import React from 'react';
import logo from '../assets/LUNETIC.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo-lunetic" />
      </div>
      <div className="footer__container">
        <ul>
          <li>Mentions légales</li>
          <Link to="/find-us">
            <li>Maps</li>
          </Link>
        </ul>
        <div className="footer__networks">
          <div className="footer__facebook" />
          <div className="footer__twitter" />
          <div className="footer__instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

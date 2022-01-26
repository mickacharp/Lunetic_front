import React from 'react';
import logo from '../assets/LUNETIC.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo-lunetic" />
      </div>
      <div className="footer__container">
        <ul>
          <li>Mentions légales</li>
          <li>Maps</li>
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

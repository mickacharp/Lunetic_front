import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/LUNETIC.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo-lunetic" />
      </div>
      <div className="footer__container">
        <ul>
          <Link to="/legal-notices">
            <li>Mentions légales</li>
          </Link>
          <Link to="/find-us">
            <li>Maps</li>
          </Link>
        </ul>
        <div className="footer__networks">
          <a
            href="http://facebook.com"
            className="footer__facebook"
            target="_blank"
            rel="noreferrer"
          />
          <a
            href="http://linkedin.com"
            className="footer__linkedin"
            target="_blank"
            rel="noreferrer"
          />
          <a
            href="http://instagram.com"
            className="footer__instagram"
            target="_blank"
            rel="noreferrer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

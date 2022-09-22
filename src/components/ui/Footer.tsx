import React from 'react';
import { Link } from 'react-router-dom';

import facebookLinkPicture from '../../assets/facebook.png';
import instagramLinkPicture from '../../assets/instagram.png';
import linkedinLinkPicture from '../../assets/linkedin.png';
import logo from '../../assets/LUNETIC.png';

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
            href="https://www.facebook.com/lunetic.lunetic.79"
            className="footer__facebook"
            target="_blank"
            rel="noreferrer"
            aria-label="Naviguer vers la page Facebook de Lunetic">
            <img src={facebookLinkPicture} alt="logo facebook" />
          </a>
          <a
            href="https://www.linkedin.com/company/lunetic-fr/"
            className="footer__linkedin"
            target="_blank"
            rel="noreferrer"
            aria-label="Naviguer vers la page LinkedIn de Lunetic">
            <img src={linkedinLinkPicture} alt="logo linkedin" />
          </a>
          <a
            href="https://www.instagram.com/lunetic_optic/"
            className="footer__instagram"
            target="_blank"
            rel="noreferrer"
            aria-label="Naviguer vers la page Instragram de Lunetic">
            <img src={instagramLinkPicture} alt="logo instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

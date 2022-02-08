import React from 'react';
import { Link } from 'react-router-dom';

import lunettesVisuelTop from '../assets/concept_Lunettes.png';
import oeilImg from '../assets/oeil1.png';

const Contact = () => {
  return (
    <div className="contact-component-container">
      <div className="contactPage">
        <div className="contactPage__visuelTop">
          <img src={lunettesVisuelTop} alt="Visuel lunettes haut de page" />
        </div>
        <div className="contactPage__close-container">
          <Link to="/">
            <p className="contactPage__close">FERMER</p>
          </Link>
        </div>

        <p className="contactPage__subtitle">
          <span id="fleche1">&#x27F6;</span>
          Nous
          <br /> contacter
        </p>

        <div className="contactPage__eyeVisual">
          <img src={oeilImg} alt="Oeil visuel" />
        </div>

        <div className="contactPage__email">
          <p className="contactPage__requests">UNE QUESTION ?</p>

          <Link to="/contact-form" className="contactPage__link">
            <p className="contactPage__emailText">Écrivez-nous&nbsp;&nbsp;&nbsp;</p>
            <p className="contactPage__emailLink"> &#x27F6;</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

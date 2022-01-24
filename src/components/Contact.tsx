import React from 'react';
import { Link } from 'react-router-dom';

import lunettesVisuelTop from '../assets/concept_Lunettes.png';
import oeilImg from '../assets/oeil1.png';

const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactPage__visuelTop">
        <img src={lunettesVisuelTop} alt="Visuel lunettes haut de page" />
      </div>
      <Link to="/">
        <p className="contactPage__close">FERMER</p>
      </Link>

      <p className="contactPage__subtitle">
        <span id="fleche1">&#x27F6;</span>
        Nous
        <br /> contacter
      </p>

      <div className="contactPage__eyeVisual">
        <img src={oeilImg} alt="Oeil visuel" />
      </div>

      <div className="contactPage__email">
        <p className="contactPage__requests">For any requests</p>

        <a href="mailto:serge.govindin@lunetic.fr">
          <p className="contactPage__emailText">Envoyer un message</p>
          <p className="contactPage__emailLink"> &#x27F6;</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;

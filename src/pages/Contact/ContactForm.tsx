import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ContactFormPro from './ContactFormPro';
import ContactFormUser from './ContactFormUser';

const ContactForm = () => {
  const [isPro, setIsPro] = useState<boolean>(false);

  return (
    <div className="contactform-component-container">
      <div className="contactform-container">
        <Link to="/">
          <p id="close" className="contactform-container__close">
            FERMER
          </p>
        </Link>
        <h1>CONTACTER LUNETIC</h1>
        <div className="contactform-container__checkbox">
          <input
            type="checkbox"
            name="pro-or-user"
            id="pro-or-user"
            onClick={() => {
              setIsPro(!isPro);
            }}
          />
          <label htmlFor="pro-or-user">
            Cochez cette case si vous êtes un professionnel de l&apos;optique
          </label>
        </div>
        {isPro ? <ContactFormPro /> : <ContactFormUser />}
      </div>
    </div>
  );
};

export default ContactForm;

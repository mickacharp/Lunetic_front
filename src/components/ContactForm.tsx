import React, { useState } from 'react';
import ContactFormPro from './ContactFormPro';
import ContactFormUser from './ContactFormUser';

const ContactForm = () => {
  const [isPro, setIsPro] = useState<boolean>(true);

  return (
    <div className="contactform-component-container">
      <div className="contactform-container">
        <p id="close" className="contactform-container__close">
          FERMER
        </p>
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
            Cochez cette case si vous êtes un professionnel de l'optique
          </label>
        </div>
        {isPro ? <ContactFormPro /> : <ContactFormUser />}
      </div>
    </div>
  );
};

export default ContactForm;

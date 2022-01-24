import React, { useState } from 'react';
import ContactFormPro from './ContactFormPro';
import ContactFormUser from './ContactFormUser';

const ContactForm = () => {
  const [isPro, setIsPro] = useState<boolean>(false);

  return (
    <div className="contactform-component-container">
      <div className="contactform-container">
        <p id="close" className="contactform-container__close">
          FERMER
        </p>
        <input
          type="checkbox"
          name="pro-or-user"
          id="pro-or-user"
          onClick={() => {
            setIsPro(!isPro);
          }}
        />
        {isPro ? <ContactFormPro /> : <ContactFormUser />}
      </div>
    </div>
  );
};

export default ContactForm;

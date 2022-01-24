import React from 'react';

const ContactFormUser = () => {
  return (
    <div className="contactformuser-container">
      <form className="contactformuser-container__form">
        <label htmlFor="contact-firstname">Votre prénom : </label>
        <input
          type="text"
          name="Prénom"
          id="contact-firstname"
          className="contactformuser-container__firstname"
        />
        <label htmlFor="contact-lastname">Votre nom : </label>
        <input
          type="text"
          name="Nom"
          id="contact-lastname"
          className="contactformuser-container__lastname"
        />
        <label htmlFor="contact-email">Votre email : </label>
        <input
          type="email"
          name="Email"
          id="contact-email"
          className="contactformuser-container__email"
        />
        <label htmlFor="contact-phone">Votre numéro de téléphone : </label>
        <input
          type="tel"
          name="Téléphone"
          id="contact-phone"
          className="contactformuser-container__phone"
        />
        <label htmlFor="contact-subject">Motif de votre demande : </label>
        <input
          type="text"
          name="Motif"
          id="contact-subject"
          className="contactformuser-container__subject"
        />
        <label htmlFor="contact-message">Votre message : </label>
        <textarea
          name="Message"
          id="contact-message"
          className="contactformuser-container__message"
        />
      </form>
    </div>
  );
};

export default ContactFormUser;

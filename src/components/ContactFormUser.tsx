import React from 'react';

const ContactFormUser = () => {
  return (
    <div className="contactformuser-container">
      <form className="contactformuser-container__form">
        <label htmlFor="contact-userfirstname">Votre prénom : </label>
        <input
          type="text"
          name="Prénom"
          id="contact-userfirstname"
          className="contactformuser-container__firstname"
          placeholder="ex: Alice"
        />
        <label htmlFor="contact-userlastname">Votre nom : </label>
        <input
          type="text"
          name="Nom"
          id="contact-userlastname"
          className="contactformuser-container__lastname"
          placeholder="ex: Dupont"
        />
        <label htmlFor="contact-useremail">Votre email : </label>
        <input
          type="email"
          name="Email"
          id="contact-useremail"
          className="contactformuser-container__email"
          placeholder="ex: exemple@email.fr"
        />
        <label htmlFor="contact-userphone">Votre numéro de téléphone : </label>
        <input
          type="tel"
          name="Téléphone"
          id="contact-userphone"
          className="contactformuser-container__phone"
          placeholder="ex: 0610203040"
        />
        <label htmlFor="contact-usersubject">Motif de votre demande : </label>
        <input
          type="text"
          name="Motif"
          id="contact-usersubject"
          className="contactformuser-container__subject"
          placeholder="ex: Demande de renseignements"
        />
        <label htmlFor="contact-usermessage">Votre message : </label>
        <textarea
          name="Message"
          id="contact-usermessage"
          className="contactformuser-container__message"
          placeholder="Ecrivez ici..."
        />
      </form>
    </div>
  );
};

export default ContactFormUser;

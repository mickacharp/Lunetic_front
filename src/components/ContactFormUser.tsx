import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactFormUser = () => {
  const [guestFirstname, setGuestFirstname] = useState<string>();
  const [guestLastname, setGuestLastname] = useState<string>();
  const [guestEmail, setGuestEmail] = useState<string>();
  const [guestPhone, setGuestPhone] = useState<string>();
  const [guestSubject, setGuestSubject] = useState<string>();
  const [guestMessage, setGuestMessage] = useState<string>();
  const customId = 'custom-id-yes';

  // sending a mail to both Lunetic and the sender.
  const sendGuestMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let contactGuestParams = {
      guestFirstname: guestFirstname,
      guestLastname: guestLastname,
      guestEmail: guestEmail,
      guestPhone: guestPhone,
      guestSubject: guestSubject,
      guestMessage: guestMessage,
    };

    axios.post('http://localhost:4000/api/contact-confirmation', contactGuestParams, {
      withCredentials: true,
    });

    axios.post('http://localhost:4000/api/contact-guest', contactGuestParams, {
      withCredentials: true,
    });

    // states reinitialized to allow to send a message again
    setGuestFirstname(undefined);
    setGuestLastname(undefined);
    setGuestEmail(undefined);
    setGuestPhone(undefined);
    setGuestSubject(undefined);
    setGuestMessage(undefined);

    // show succeed message popup
    toast.success('Votre message a bien été envoyé', {
      autoClose: 2000,
      toastId: customId,
      pauseOnHover: false,
    });
  };

  return (
    <div className="contactformuser-container">
      <form
        className="contactformuser-container__form"
        onSubmit={(e) => sendGuestMail(e)}>
        <label htmlFor="contact-userfirstname">Votre prénom : </label>
        <input
          type="text"
          name="Prénom"
          id="contact-userfirstname"
          className="contactformuser-container__firstname"
          placeholder="ex: Alice"
          onChange={(e) => setGuestFirstname(e.target.value)}
        />
        <label htmlFor="contact-userlastname">Votre nom : </label>
        <input
          type="text"
          name="Nom"
          id="contact-userlastname"
          className="contactformuser-container__lastname"
          placeholder="ex: Dupont"
          onChange={(e) => setGuestLastname(e.target.value)}
        />
        <label htmlFor="contact-useremail">Votre email* : </label>
        <input
          type="email"
          name="Email"
          id="contact-useremail"
          className="contactformuser-container__email"
          placeholder="ex: exemple@email.fr"
          required
          onChange={(e) => setGuestEmail(e.target.value)}
        />
        <label htmlFor="contact-userphone">Votre numéro de téléphone : </label>
        <input
          type="tel"
          name="Téléphone"
          id="contact-userphone"
          className="contactformuser-container__phone"
          placeholder="ex: 0610203040"
          onChange={(e) => setGuestPhone(e.target.value)}
        />
        <label htmlFor="contact-usersubject">Motif de votre demande* : </label>
        <input
          type="text"
          name="Motif"
          id="contact-usersubject"
          className="contactformuser-container__subject"
          placeholder="ex: Demande de renseignements"
          required
          onChange={(e) => setGuestSubject(e.target.value)}
        />
        <label htmlFor="contact-usermessage">Votre message* : </label>
        <textarea
          name="Message"
          id="contact-usermessage"
          className="contactformuser-container__message"
          placeholder="Ecrivez ici..."
          required
          onChange={(e) => setGuestMessage(e.target.value)}
        />
        <input type="submit" value="Envoyer" id="contact-submit-guest" />
      </form>
    </div>
  );
};

export default ContactFormUser;

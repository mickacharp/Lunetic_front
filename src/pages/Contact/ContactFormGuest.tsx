import axios from 'axios';
import React, { useState } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import IContactGuestParams from '../../interfaces/IContactGuestParams';

const ContactFormGuest = () => {
  const [guestFirstname, setGuestFirstname] = useState<string>('');
  const [guestLastname, setGuestLastname] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestSubject, setGuestSubject] = useState<string>('');
  const [guestMessage, setGuestMessage] = useState<string>('');

  const reinitializeStates = () => {
    setGuestFirstname('');
    setGuestLastname('');
    setGuestEmail('');
    setGuestPhone('');
    setGuestSubject('');
    setGuestMessage('');
  };

  // axios POST to send emails to user and admin
  const sendConfirmationEmailToUser = (paramsToSend: IContactGuestParams) => {
    axios.post('http://localhost:4000/api/contact-confirmation', paramsToSend, {
      withCredentials: true,
    });
  };
  const sendConfirmationEmailToAdmin = (paramsToSend: IContactGuestParams) => {
    axios.post('http://localhost:4000/api/contact-guest', paramsToSend, {
      withCredentials: true,
    });
  };

  // displaying toasts regarding success or failure of sent emails
  const toastOptions: ToastOptions = {
    autoClose: 3000,
    pauseOnHover: true,
  };
  const displaySuccessToast = () => {
    toast.success('Votre message a bien été envoyé', toastOptions);
  };
  const displayErrorToast = () => {
    toast.error('Une erreur est survenue, veuillez réessayer', toastOptions);
  };

  const sendEmails = (paramsToSend: IContactGuestParams) => {
    Promise.all([
      sendConfirmationEmailToUser(paramsToSend),
      sendConfirmationEmailToAdmin(paramsToSend),
    ])
      .then(() => {
        displaySuccessToast();
        reinitializeStates();
      })
      .catch(() => {
        displayErrorToast();
      });
  };

  // on form submit: get user contact details and send emails
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let contactGuestParams: IContactGuestParams = {
      guestFirstname: guestFirstname,
      guestLastname: guestLastname,
      guestEmail: guestEmail,
      guestPhone: guestPhone,
      guestSubject: guestSubject,
      guestMessage: guestMessage,
    };

    sendEmails(contactGuestParams);
  };

  return (
    <div className="contactformuser-container">
      <form className="contactformuser-container__form" onSubmit={(e) => submitForm(e)}>
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

export default ContactFormGuest;

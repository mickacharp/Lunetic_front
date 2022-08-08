import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import IContactProParams from '../../interfaces/IContactProParams';

import gout from '../../assets/gout.png';

const ContactFormPro = () => {
  const [proFirstname, setProFirstname] = useState<string>('');
  const [proLastname, setProLastname] = useState<string>('');
  const [proCompany, setProCompany] = useState<string>('');
  const [proStreetNumber, setProStreetNumber] = useState<string>('');
  const [proStreet, setProStreet] = useState<string>('');
  const [proCity, setProCity] = useState<string>('');
  const [proPhone, setProPhone] = useState<string>('');
  const [proMobilePhone, setProMobilePhone] = useState<string>('');
  const [proEmail, setProEmail] = useState<string>('');
  const [proSubject, setProSubject] = useState<string>('En savoir plus');
  const [proMessage, setProMessage] = useState<string>('');

  const reinitializeStates = () => {
    setProFirstname('');
    setProLastname('');
    setProCompany('');
    setProStreetNumber('');
    setProStreet('');
    setProCity('');
    setProPhone('');
    setProMobilePhone('');
    setProEmail('');
    setProSubject('En savoir plus');
    setProMessage('');
  };

  // axios POST to send emails to user and admin
  const sendConfirmationEmailToUser = (paramsToSend: IContactProParams) => {
    axios.post('http://localhost:4000/api/contact-confirmation', paramsToSend, {
      withCredentials: true,
    });
  };
  const sendConfirmationEmailToAdmin = (paramsToSend: IContactProParams) => {
    axios.post('http://localhost:4000/api/contact-pro', paramsToSend, {
      withCredentials: true,
    });
  };

  // displaying toasts regarding success or failure of sent emails
  const displaySuccessToast = () => {
    toast.success('Votre message a bien été envoyé', {
      autoClose: 3000,
      pauseOnHover: true,
    });
  };
  const displayErrorToast = () => {
    toast.error('Une erreur est survenue, veuillez réessayer', {
      autoClose: 3000,
      pauseOnHover: true,
    });
  };

  const sendEmails = (paramsToSend: IContactProParams) => {
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

    let contactProParams = {
      proFirstname: proFirstname,
      proLastname: proLastname,
      proCompany: proCompany,
      proStreetNumber: proStreetNumber,
      proStreet: proStreet,
      proCity: proCity,
      proEmail: proEmail,
      proPhone: proPhone,
      proMobilePhone: proMobilePhone,
      proSubject: proSubject,
      proMessage: proMessage,
    };

    sendEmails(contactProParams);
  };

  return (
    <div className="contactformpro-container">
      <form className="contactformpro-container__form" onSubmit={(e) => submitForm(e)}>
        <div className="contactformpro-container__left">
          <fieldset>
            <legend>Vous</legend>
            <label htmlFor="contact-profirstname">Votre prénom : </label>
            <br />
            <input
              type="text"
              name="Prénom"
              id="contact-profirstname"
              className="contactformpro-container__firstname"
              placeholder="ex: Alice"
              onChange={(e) => setProFirstname(e.target.value)}
            />
            <br />
            <label htmlFor="contact-prolastname">Votre nom : </label>
            <br />
            <input
              type="text"
              name="Nom"
              id="contact-prolastname"
              className="contactformpro-container__lastname"
              placeholder="ex: Dupont"
              onChange={(e) => setProLastname(e.target.value)}
            />
            <br />
            <label htmlFor="contact-company">Nom de votre magasin* : </label>
            <br />
            <input
              type="text"
              name="Magasin"
              id="contact-company"
              className="contactformpro-container__company"
              placeholder="ex: Lunetic"
              required
              onChange={(e) => setProCompany(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Votre adresse</legend>
            <label htmlFor="contact-streetnumber">Numéro de voie : </label>
            <br />
            <input
              type="text"
              name="Numéro de voie"
              id="contact-streetnumber"
              className="contactformpro-container__streetnumber"
              placeholder="ex: 2, 3bis"
              onChange={(e) => setProStreetNumber(e.target.value)}
            />
            <br />
            <label htmlFor="contact-street">Type et nom de voie : </label>
            <br />
            <input
              type="text"
              name="Type et nom de voie"
              id="contact-street"
              className="contactformpro-container__street"
              placeholder="ex: rue du Chêne"
              onChange={(e) => setProStreet(e.target.value)}
            />
            <br />
            <label htmlFor="contact-city">Code postal et Ville : </label>
            <br />
            <input
              type="text"
              name="Code postal et ville"
              id="contact-city"
              className="contactformpro-container__city"
              placeholder="ex: 64200 Biarritz"
              onChange={(e) => setProCity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Vos coordonnées</legend>
            <label htmlFor="contact-prophone">Téléphone fixe : </label>
            <br />
            <input
              type="tel"
              name="Téléphone fixe"
              id="contact-prophone"
              className="contactformpro-container__phone"
              placeholder="ex: 0559203040"
              required={proMobilePhone?.length ? false : true}
              onChange={(e) => setProPhone(e.target.value)}
            />
            <br />
            <label htmlFor="contact-promobilephone">Téléphone mobile* : </label>
            <br />
            <input
              type="tel"
              name="Téléphone mobile"
              id="contact-promobilephone"
              className="contactformpro-container__mobilephone"
              placeholder="ex: 0610203040"
              required={proPhone?.length ? false : true}
              onChange={(e) => setProMobilePhone(e.target.value)}
            />
            <br />
            <label htmlFor="contact-proemail">Votre email* : </label>
            <br />
            <input
              type="email"
              name="Email"
              id="contact-proemail"
              className="contactformpro-container__email"
              placeholder="ex: exemple@email.fr"
              required
              onChange={(e) => setProEmail(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="contactformpro-container__right">
          <img src={gout} alt="goutte lunetic" />
          <label htmlFor="contact-prosubject">
            Sélectionnez le motif de votre demande* :{' '}
          </label>
          <select
            id="contact-prosubject"
            className="contactformpro-container__subject"
            required
            onChange={(e) => setProSubject(e.target.value)}>
            <option value="En savoir plus">En savoir plus</option>
            <option value="Demander un accès">Demander un accès</option>
            <option value="Contacter le SAV">Contacter le SAV</option>
            <option value="Mot de passe oublié">Mot de passe oublié</option>
          </select>
          <label htmlFor="contact-promessage">Votre message* : </label>
          <textarea
            name="Message"
            id="contact-promessage"
            className="contactformpro-container__message"
            placeholder="Ecrivez ici..."
            required
            onChange={(e) => setProMessage(e.target.value)}
          />
        </div>
        <input type="submit" value="Envoyer" id="contact-submit-pro" />
      </form>
    </div>
  );
};

export default ContactFormPro;

import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import gout from '../assets/gout.png';

const ContactFormPro = () => {
  const [proFirstname, setProFirstname] = useState<string>();
  const [proLastname, setProLastname] = useState<string>();
  const [proCompany, setProCompany] = useState<string>();
  const [proStreetNumber, setProStreetNumber] = useState<string>();
  const [proStreet, setProStreet] = useState<string>();
  const [proCity, setProCity] = useState<string>();
  const [proPhone, setProPhone] = useState<string>();
  const [proMobilePhone, setProMobilePhone] = useState<string>();
  const [proEmail, setProEmail] = useState<string>();
  const [proSubject, setProSubject] = useState<string>('En savoir plus');
  const [proMessage, setProMessage] = useState<string>();
  const customId = 'custom-id-yes';

  // sending a mail to both Lunetic and the sender.
  const sendProMail = (e: React.FormEvent<HTMLFormElement>) => {
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

    axios.post('http://localhost:4000/api/contact-confirmation', contactProParams, {
      withCredentials: true,
    });

    axios.post('http://localhost:4000/api/contact-pro', contactProParams, {
      withCredentials: true,
    });

    // states reinitialized to allow to send a message again
    setProFirstname(undefined);
    setProLastname(undefined);
    setProCompany(undefined);
    setProStreetNumber(undefined);
    setProStreet(undefined);
    setProCity(undefined);
    setProPhone(undefined);
    setProMobilePhone(undefined);
    setProEmail(undefined);
    setProSubject('En savoir plus');
    setProMessage(undefined);

    // show succeed message popup
    toast.success('Votre message a bien ??t?? envoy??', {
      autoClose: 2000,
      toastId: customId,
      pauseOnHover: false,
    });
  };

  return (
    <div className="contactformpro-container">
      <form className="contactformpro-container__form" onSubmit={(e) => sendProMail(e)}>
        <div className="contactformpro-container__left">
          <fieldset>
            <legend>Vous</legend>
            <label htmlFor="contact-profirstname">Votre pr??nom : </label>
            <br />
            <input
              type="text"
              name="Pr??nom"
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
            <label htmlFor="contact-streetnumber">Num??ro de voie : </label>
            <br />
            <input
              type="text"
              name="Num??ro de voie"
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
              placeholder="ex: rue du Ch??ne"
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
            <legend>Vos coordonn??es</legend>
            <label htmlFor="contact-prophone">T??l??phone fixe : </label>
            <br />
            <input
              type="tel"
              name="T??l??phone fixe"
              id="contact-prophone"
              className="contactformpro-container__phone"
              placeholder="ex: 0559203040"
              required={proMobilePhone?.length ? false : true}
              onChange={(e) => setProPhone(e.target.value)}
            />
            <br />
            <label htmlFor="contact-promobilephone">T??l??phone mobile* : </label>
            <br />
            <input
              type="tel"
              name="T??l??phone mobile"
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
            S??lectionnez le motif de votre demande* :{' '}
          </label>
          <select
            id="contact-prosubject"
            className="contactformpro-container__subject"
            required
            onChange={(e) => setProSubject(e.target.value)}>
            <option value="En savoir plus">En savoir plus</option>
            <option value="Demander un acc??s">Demander un acc??s</option>
            <option value="Contacter le SAV">Contacter le SAV</option>
            <option value="Mot de passe oubli??">Mot de passe oubli??</option>
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

import React from 'react';
import gout from '../assets/gout.png';

const ContactFormPro = () => {
  return (
    <div className="contactformpro-container">
      <form className="contactformpro-container__form">
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
            />
            <br />
            <label htmlFor="contact-company">Nom de votre magasin : </label>
            <br />
            <input
              type="text"
              name="Magasin"
              id="contact-company"
              className="contactformpro-container__company"
              placeholder="ex: Lunetic"
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
            />
            <br />
            <label htmlFor="contact-promobilephone">Téléphone mobile : </label>
            <br />
            <input
              type="tel"
              name="Téléphone mobile"
              id="contact-promobilephone"
              className="contactformpro-container__mobilephone"
              placeholder="ex: 0610203040"
            />
            <br />
            <label htmlFor="contact-proemail">Votre email : </label>
            <br />
            <input
              type="email"
              name="Email"
              id="contact-proemail"
              className="contactformpro-container__email"
              placeholder="ex: exemple@email.fr"
            />
          </fieldset>
        </div>
        <div className="contactformpro-container__right">
          <img src={gout} alt="goutte lunetic" />
          <label htmlFor="contact-prosubject">
            Sélectionnez le motif de votre demande :{' '}
          </label>
          <select id="contact-prosubject" className="contactformpro-container__subject">
            <option value="">En savoir plus</option>
            <option value="">Demander un accès</option>
            <option value="">Contacter le SAV</option>
          </select>
          <label htmlFor="contact-promessage">Votre message : </label>
          <textarea
            name="Message"
            id="contact-promessage"
            className="contactformpro-container__message"
            placeholder="Ecrivez ici..."
          />
        </div>
      </form>
    </div>
  );
};

export default ContactFormPro;

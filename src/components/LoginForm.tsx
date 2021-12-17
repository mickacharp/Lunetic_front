import React from 'react';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-container__img-container"></div>
      <div className="login-container__form-container">
        <p className="login-container__close">FERMER</p>
        <h1>Se Connecter Avec Une Adresse Email</h1>
        <form action="">
          <input type="email" id="login-email" placeholder="EMAIL" />
          <input type="password" id="login-password" placeholder="MOT DE PASSE" />
          <br />
          <input type="button" value="SE CONNECTER" id="login-submit" />
        </form>
        <p>MOT DE PASSE OUBLIÉ ?</p>
        <h1>Pas encore inscrit ?</h1>
        <p>JE M&apos;INSCRIS</p>
      </div>
    </div>
  );
};

export default LoginForm;

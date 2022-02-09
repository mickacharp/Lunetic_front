import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import CurrentOpticianContext from '../contexts/CurrentOptician';
import IOptician from '../interfaces/IOptician';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const navigate: NavigateFunction = useNavigate();

  const { setIdOptician } = useContext(CurrentOpticianContext);
  const customId = 'custom-id-yes';

  // redirect the app to the home page
  // show popup successful connection
  function redirectHome() {
    navigate('/');
    toast.success('Vous êtes bien connecté', {
      autoClose: 2000,
      toastId: customId,
      pauseOnHover: false,
    });
  }

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post<IOptician>(
        'http://localhost:4000/api/login',
        { email, password },
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      )
      .then((response) => response.data)
      .then((data) => {
        setIdOptician(data.id_optician);
        setErrorMessage('');
        redirectHome();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setErrorMessage('Email ou mot de passe incorrect');
        } else {
          setErrorMessage(err);
        }
      });
  };

  return (
    <div className="login-component-container">
      <div className="login-container">
        <div className="login-container__img-container"></div>
        <div className="login-container__form-container">
          <Link to="/">
            <p id="close" className="login-container__close">
              FERMER
            </p>
          </Link>
          <h1>OPTICIEN & LUNETIC</h1>
          <p id="welcome">Bienvenue sur le site Lunetic</p>
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => login(e)}>
            <input
              type="email"
              id="login-email"
              placeholder="Email"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
              value={email}
            />
            <input
              type="password"
              id="login-password"
              placeholder="Mot de passe"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
              value={password}
            />
            <br />
            <Link to="/contact-form">
              <p id="forgot-pswrd">Mot de passe oublié ?</p>
            </Link>
            <input type="submit" value="Valider" id="login-submit" />
            {errorMessage && <span>{errorMessage}</span>}
          </form>
          <Link to="/contact-form">
            <p id="signup">Créer un compte</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

import axios from 'axios';
import React, { useContext, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import CurrentOpticianContext from '../contexts/CurrentOptician';
import IOptician from '../interfaces/IOptician';
import Sidebar from './Sidebar';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>();
  const navigate: NavigateFunction = useNavigate();

  const { setIdOptician } = useContext(CurrentOpticianContext);

  function redirectHome() {
    navigate('/');
  }

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post<IOptician>(
        'http://localhost:7000/api/login',
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
      <Sidebar />
      <div className="login-container">
        <div className="login-container__img-container"></div>
        <div className="login-container__form-container">
          <p id="close" className="login-container__close">
            FERMER
          </p>
          <p>DÉJÀ INSCRIT ?</p>
          <h1>Se connecter avec une adresse email</h1>
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => login(e)}>
            <input
              type="email"
              id="login-email"
              placeholder="EMAIL"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
              value={email}
            />
            <input
              type="password"
              id="login-password"
              placeholder="MOT DE PASSE"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
              value={password}
            />
            <br />
            <input type="submit" value="SE CONNECTER" id="login-submit" />
            {errorMessage && <span>{errorMessage}</span>}
          </form>
          <p id="forgot-pswrd">MOT DE PASSE OUBLIÉ ?</p>
          <h1>Pas encore inscrit ?</h1>
          <p id="signup">JE M&apos;INSCRIS</p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

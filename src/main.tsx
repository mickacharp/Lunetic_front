import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { CurrentOpticianContextProvider } from './contexts/CurrentOptician';

ReactDOM.render(
  <React.StrictMode>
    <CurrentOpticianContextProvider>
      <App />
    </CurrentOpticianContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

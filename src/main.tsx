import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { CurrentOpticianContextProvider } from './contexts/CurrentOptician';
import { PositionYContextProvider } from './contexts/PositionY';

ReactDOM.render(
  <React.StrictMode>
    <CurrentOpticianContextProvider>
      <PositionYContextProvider>
        <App />
      </PositionYContextProvider>
    </CurrentOpticianContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

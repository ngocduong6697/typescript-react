import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from 'styles/globalStyle';
import HomePage from './app/page/HomePage/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);

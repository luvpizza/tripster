import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';

import { BrowserRouter } from 'react-router-dom';
import "@/styles/globals.scss"

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('root')
);
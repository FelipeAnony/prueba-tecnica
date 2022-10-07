import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import '../presentation/styles/global.scss';

import { Routes } from '@/presentation/router';
import { GlobalDataProvider } from '@/store/contexts';

ReactDOM.render(
  <React.StrictMode>
    <GlobalDataProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </GlobalDataProvider>
  </React.StrictMode>,
  document.getElementById('main')
);

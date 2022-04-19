import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import '@/assets/css/reset.css';
import 'antd/dist/antd.css'

import App from './App.jsx';
import store from '@/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

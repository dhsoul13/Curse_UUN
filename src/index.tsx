/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './Store';
import './assets/main.scss';
import { BrowserRouter } from 'react-router-dom';

// import './assets/style/main.scss';

// eslint-disable-next-line no-undef
// userInfoReducer, composeWithDevTools(applyMiddleware())
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

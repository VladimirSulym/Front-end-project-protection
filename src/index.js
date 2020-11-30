import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App_fur from './App_fur'
import routes from "./router/routes";

import configureStore from "./store/configure_store";
import {Provider} from 'react-redux';

const store = configureStore();



ReactDOM.render(
  <Provider store={store}>
    <App_fur>
      {routes}
    </App_fur>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

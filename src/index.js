import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/store';
import './assets/css/main.scss';
import './assets/images/favicon.ico';

const store = configureStore();


export default ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app') || document.createElement('div')
);

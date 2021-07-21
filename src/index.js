import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducers from './store';
import {  Provider } from 'react-redux';

import { createStore } from 'redux';
const store = createStore(rootReducers,

  window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()

);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App store={store}/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


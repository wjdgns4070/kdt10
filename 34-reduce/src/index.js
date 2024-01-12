import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App3';
import {createStore} from 'redux'
import CounterReducer from './store/CounterReducer'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(CounterReducer)
root.render(
  // <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  // </React.StrictMode>
);

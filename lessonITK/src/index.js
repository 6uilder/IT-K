import store from './redux/redux_store'
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';





ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));




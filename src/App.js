import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import configureStore from './store/configureStore';
import './app.scss';

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        test
      </div>
    </BrowserRouter>
  </Provider>
);

export default hot(module)(App);

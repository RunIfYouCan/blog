import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { BlogList } from './containers';
import configureStore from './store/configureStore';
import './app.scss';

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={BlogList} />
    </BrowserRouter>
  </Provider>
);

export default hot(module)(App);

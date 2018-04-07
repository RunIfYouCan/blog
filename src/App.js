import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './app.scss'; // import sass before containers because of styles order
import { BlogList, Post } from './containers';
import configureStore from './store/configureStore';

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={BlogList} />
        <Redirect to="/posts" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default hot(module)(App);

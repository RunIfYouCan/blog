import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { hot } from 'react-hot-loader';
import configureStore from './store/configureStore';

export const store = configureStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div className="App">
              test
            </div>
          </BrowserRouter>
        </Provider>
    );
  }
}

export default hot(module)(App);

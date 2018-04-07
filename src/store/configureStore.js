import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

const isDev = process.env.NODE_ENV === 'development';

const middleware = applyMiddleware(thunk);

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f; //eslint-disable-line

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    ...[isDev ? compose(middleware, devTools) : middleware],
  );

  if (module.hot) {
    module.hot.accept('../redux/reducers', () => {
      const nextRootReducer = require('../redux/reducers'); //eslint-disable-line
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

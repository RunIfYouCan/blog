import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

const isDev = process.env.NODE_ENV === 'development';

const middleware = applyMiddleware(thunk);

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f; //eslint-disable-line

export default initialState => createStore(
  rootReducer,
  initialState,
  ...[isDev ? compose(middleware, devTools) : middleware],
);

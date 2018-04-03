import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../redux/reducers";

const isDev = process.env.NODE_ENV === "development";

const middleware = applyMiddleware();

const devTools =  window.devToolsExtension ?
  window.devToolsExtension() : f => f;

export default (initialState) => createStore(
  rootReducer,
  initialState,
  ...[isDev ? compose(middleware, devTools) : middleware]
);

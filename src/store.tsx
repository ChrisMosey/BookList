import { applyMiddleware, createStore } from "redux";

import * as createLogger from 'redux-logger';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers/booksReducer";

const middleware = applyMiddleware(createLogger(), thunk, promise());

export default createStore(reducer);
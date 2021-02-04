import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';

const initalState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  applyMiddleware(...middleware),
);

export default store;

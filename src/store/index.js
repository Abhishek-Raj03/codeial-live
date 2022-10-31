import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

let store;
export function configurestore() {
  store = configureStore({ reducer: rootReducer, middleware: [logger, thunk] });
  return store;
  // console.log('store',store.getState())
}

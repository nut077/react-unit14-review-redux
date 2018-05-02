import { createStore , applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { storage } from '../middlewares'
import rootReducer from '../reducers'

export default function(initialState) {
  const middlewares = [
    storage,
    logger
  ];
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}
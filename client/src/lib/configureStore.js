import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import { storage } from '../middlewares'
import rootReducer from '../reducers'

export default function (initialState) {
  const middlewares = [
    storage,
    logger
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    )
  }

  return store;
}
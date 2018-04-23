import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { Articles } from './';

const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <Articles />
  </Provider>
)


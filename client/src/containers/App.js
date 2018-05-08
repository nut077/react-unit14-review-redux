import React from 'react'
import { Provider } from 'react-redux'
import { loadState, configureStore } from '../lib';
import { Articles } from './';

let store = configureStore(loadState());

export default () => (
  <Provider store={store}>
    <div>
      <Articles />
    </div>
  </Provider>
)


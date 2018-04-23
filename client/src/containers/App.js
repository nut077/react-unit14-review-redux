import React from 'react'
import { Header } from '../components'
import { Articles, Users } from './'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers'

const store = createStore(rootReducer);
export default () => (
  <Provider store={store}>
    <div>
      <Header />
      <Articles />
      <Users />
    </div>
  </Provider>
)
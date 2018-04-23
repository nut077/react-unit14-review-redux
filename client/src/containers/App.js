import React from 'react'
import { Header } from '../components'
import { Articles, Users, Provider } from './'
import { createStore } from '../lib';
import rootReducer from '../reducers'

const store = createStore(rootReducer);
export default () => (
  <Provider store={store} >
    <div>
      <Header />
      <Articles />
      <Users />
    </div>
  </Provider>
)
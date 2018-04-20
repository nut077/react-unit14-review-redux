import React from 'react'
import { Header } from '../components'
import { Articles, Users } from './'
import { createStore } from '../lib';
import rootReducer from '../reducers'

const store = createStore(rootReducer);
export default () => (
  <div>
    <Header />
    <Articles store={store} />
    <Users store={store} />
  </div>
)
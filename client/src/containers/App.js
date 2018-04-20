import React from 'react'
import { Header } from '../components'
import { Articles, Users } from './'
import { createStore } from '../lib';

const store = createStore();
export default () => (
  <div>
    <Header />
    <Articles store={store} />
    <Users store={store} />
  </div>
)
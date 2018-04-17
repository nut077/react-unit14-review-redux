import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { withState, compose } from 'recompose'
import { UserList } from '../components'

const Users = ({ users }) => (
  <Switch>
    <Route path='/users' render={() => <UserList users={users} />} />
  </Switch>
);

export default compose(
  withRouter,
  withState('users', 'setUsers', [
    {id: 1, name: 'name#1'},
    {id: 2, name: 'name#2'}
  ])
)(Users)
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { withState, withHandlers, compose } from 'recompose'
import { UserList, EditUser } from '../components'

const Users = ({ users, onEditUsers }) => (
  <Switch>
    <Route exact path='/users' render={() => <UserList users={users} />} />
    <Route path='/users/:id/edit' render=
      {
        ({ match: { params } }) =>
        <EditUser
          {...users.find(user => user.id === Number(params.id))}
          onSubmit={onEditUsers}
        />
      }
    />
  </Switch>
);

export default compose(
  withRouter,
  withState('users', 'setUsers', [
    {id: 1, name: 'name#1'},
    {id: 2, name: 'name#2'}
  ]),
  withHandlers({
    onEditUsers: ({ history, users, setUsers }) => (user) => {
      setUsers(
        users.map(item => item.id === user.id ? { ...item, ...user } : item)
      );
      history.push('/users');
    }
  })
)(Users)
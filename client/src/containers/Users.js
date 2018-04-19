import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { withHandlers, compose } from 'recompose'
import { UserList, EditUser } from '../components'
import { UserStore } from '../stores';

const Users = ({ onEditUsers }) => (
  <Switch>
    <Route exact path='/users' render={() => <UserList users={UserStore.getState()} />} />
    <Route path='/users/:id/edit' render=
      {
        ({ match: { params } }) =>
        <EditUser
          {...UserStore.getState().find(user => user.id === Number(params.id))}
          onSubmit={onEditUsers}
        />
      }
    />
  </Switch>
);

export default compose(
  withRouter,
  withHandlers({
    onEditUsers: ({ history }) => (user) => {
      UserStore.editUser(user);
      history.push('/users');
    }
  })
)(Users)
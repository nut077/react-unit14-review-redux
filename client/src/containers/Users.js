import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { getContext, withHandlers, compose } from 'recompose'
import PropTypes from 'prop-types'
import { UserList, EditUser } from '../components'
import { editUser } from '../actions'

const Users = ({ store, onEditUsers }) => (
  <Switch>
    <Route exact path='/users' render={() => <UserList users={store.getState().users} />} />
    <Route path='/users/:id/edit' render=
      {
        ({ match: { params } }) =>
        <EditUser
          {...store.getState().users.find(user => user.id === Number(params.id))}
          onSubmit={onEditUsers}
        />
      }
    />
  </Switch>
);

export default compose(
  withRouter,
  getContext({
    store: PropTypes.object
  }),
  withHandlers({
    onEditUsers: ({ store, history }) => (user) => {
      store.dispatch(editUser(user));
      history.push('/users');
    }
  })
)(Users)
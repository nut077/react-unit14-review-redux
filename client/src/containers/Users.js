import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { setPropTypes, withHandlers, compose } from 'recompose'
import PropTypes from 'prop-types'
import { UserList, EditUser } from '../components'

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
  withHandlers({
    onEditUsers: ({ store, history }) => (user) => {
      store.dispatch({
        type: 'EDIT_USER',
        user
      });
      history.push('/users');
    }
  }),
  setPropTypes({
    store: PropTypes.object.isRequired
  })
)(Users)
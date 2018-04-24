import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createArticle } from '../actions'
import { Form } from './'

const CreateArticle = ({ createArticle }) => (
  <Form onSubmit={createArticle} textButton={'Create'} />
);

export default compose(
  withRouter,
  connect(
    null,
    (dispatch, { history }) => ({
      createArticle(article) {
        dispatch(createArticle(article));
        history.push('/articles');
      }
    })
  )
)(CreateArticle)
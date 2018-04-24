import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setPropTypes, compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { editArticle } from '../actions';
import { Form } from '../components'

const EditArticle = ({ article, editArticle }) => (
  <Form {...article} onSubmit={editArticle} textButton={'Edit'} />
);

export default compose(
  withRouter,
  setPropTypes({
    article: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  }),
  connect(
    null,
    (dispatch, { history, article: {id} }) => ({
      editArticle(article) {
        dispatch(editArticle(id, article));
        history.push(`/article/${id}`);
      }
    })
  )
)(EditArticle)
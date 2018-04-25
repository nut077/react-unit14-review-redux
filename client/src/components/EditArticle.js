import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { editArticle } from '../actions';
import { Form } from '../components'

const EditArticle = ({ article, editArticle }) => (
  <Form {...article} onSubmit={editArticle} textButton={'Edit'} />
);

export default compose(
  withRouter,
  connect(
    ({ articles }, { match: { params } } ) => ({
      article: articles.find(article => article.id === Number(params.id))
    }),
    (dispatch, { match: { params }, history }) => ({
      editArticle(article) {
        const id = params.id;
        dispatch(editArticle(id, article));
        history.push(`/article/${id}`);
      }
    })
  )
)(EditArticle)
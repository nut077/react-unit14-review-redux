import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { deleteArticle } from '../actions';

const ShowArticle = ({ article: { id, title, content }, deleteArticle }) => (
  <div>
    <div>Title : {title}</div>
    <div>Content : {content}</div>
    <Link to={`/articles`}>
      <button type="button">Back</button>
    </Link>&nbsp;
    <Link to={`/article/${id}/edit`}>
      <button type="button">Edit</button>
    </Link>&nbsp;
    <button type="button" onClick={deleteArticle}>Delete</button>
  </div>
);

export default compose(
  withRouter,
  connect(
    ({ articles }, { match: {params} } ) => ({
      article: articles.find(article => article.id === Number(params.id))
    }),
    (dispatch, { match: {params}, history }) => ({
      deleteArticle() {
        dispatch(deleteArticle(params.id));
        history.push('/articles');
      }
    })
  )
)(ShowArticle)
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { setPropTypes, compose } from 'recompose'

const ShowArticle = ({ article: { id, title, content } }) => (
  <div>
    <div>Title : {title}</div>
    <div>Content : {content}</div>
    <Link to={`/articles`}>
      <button type="button">Back</button>
    </Link>&nbsp;
    <Link to={`/article/${id}/edit`}>
      <button type="button">Edit</button>
    </Link>&nbsp;
    <Link to={`/article/${id}/delete`}>
      <button type="button">Delete</button>
    </Link>
  </div>
);

export default compose(
  setPropTypes({
    article: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired
  })
)(ShowArticle)
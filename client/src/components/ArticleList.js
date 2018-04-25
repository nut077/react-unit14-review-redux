import React from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Article } from '../components'

const ArticleList = ({ articles }) => (
  <div>
    <ul>
      {
        articles.map(article =>
          <Article key={article.id} {...article} />
        )
      }
    </ul>
    <Link to='/articles/new'>
      <button type="button">New article</button>
    </Link>
  </div>
);

export default compose(
  withRouter,
  connect(
    ({ articles }) => ({ articles })
  )
)(ArticleList)
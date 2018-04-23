import React from 'react'
import PropTypes from 'prop-types'
import { Article } from '../components'

const ArticleList = ({ articles }) => (
  <ul>
    {
      articles.map(article =>
        <Article key={article.id} {...article} />
      )
    }
  </ul>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList
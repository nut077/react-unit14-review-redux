import React from 'react'
import { Article } from './'
import PropTypes from 'prop-types'
import styles from './ArticleList.scss'

const ArticleList = ({ articles }) => (
  <div className={styles.articles}>
    {
      articles.map(article => <Article key={article.id} {...article} />)
    }
  </div>

);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }))
};

export default ArticleList
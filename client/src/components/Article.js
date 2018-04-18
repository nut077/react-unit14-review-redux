import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Article.scss'
import { Card, CardHeader, CardBody } from './'

const Article = ({ id, title, content }) => (
  <div className={styles.article}>
    <Card>
      <CardHeader>
        <Link to={`/articles/${id}/edit`} className={styles.edit}>{title}</Link>
      </CardHeader>
      <CardBody>{content}</CardBody>
    </Card>
  </div>
);

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Article
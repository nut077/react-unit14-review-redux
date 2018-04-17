import React from 'react'
import PropTypes from 'prop-types'
import styles from './Article.scss'
import { Card, CardHeader, CardBody } from './'

const Article = ({ id, title, content }) => (
  <div className={styles.article}>
    <Card>
      <CardHeader>{title}</CardHeader>
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
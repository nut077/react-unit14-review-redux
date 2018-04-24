import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Article = ({ id, title }) => (
  <li>
    <Link to={`/article/${id}`}>{title}</Link>
  </li>
);

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Article
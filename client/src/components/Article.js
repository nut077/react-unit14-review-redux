import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ title, content }) => (
  <li>
    <div>{title}</div>
    <div>{content}</div>
  </li>
);

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Article
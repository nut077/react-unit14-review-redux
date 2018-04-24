import React from 'react'
import PropTypes from 'prop-types'
import { withState, withHandlers, setPropTypes, compose } from 'recompose'

const Form = ({ article: { title, content }, handleSubmit, handleChange, textButton }) => (
  <div>
    <input
      type="text"
      name="title"
      value={title}
      onChange={handleChange}
    />
    <br />
    <input
      type="text"
      name="content"
      value={content}
      onChange={handleChange}
    />
    <br />
    <button
      type="button"
      onClick={handleSubmit}
    >{textButton}</button>
  </div>
);

export default compose(
  setPropTypes({
    onSubmit: PropTypes.func.isRequired,
    textButton: PropTypes.string.isRequired
  }),
  withState('article', 'setArticle', ({ title, content }) => {
    return {
      title: title ? title : '',
      content: content ? content : ''
    }
  }),
  withHandlers({
    handleSubmit: ({ onSubmit, article }) => () => {
      onSubmit(article);
    },
    handleChange: ({ article, setArticle }) => event => {
      const {name, value} = event.target;
      setArticle({...article, [name]: value})
    }
  })
)(Form)
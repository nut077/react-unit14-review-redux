import React from 'react'
import PropTypes from 'prop-types'
import { withState, withHandlers, setPropTypes, compose } from 'recompose'

const EditArticle = ({
  id,
  formValues: { title, content },
  onFieldChange,
  onSubmit
}) => (
  <form>
    <label htmlFor='title'>Title</label>
    <input
      type='text'
      name='title'
      placeholder='Enter title'
      value={title}
      onChange={onFieldChange}
    />
    <input
      type='text'
      name='content'
      placeholder='Enter content'
      value={content}
      onChange={onFieldChange}
    />
    <button
      type='submit'
      onClick={onSubmit}
    >
      Edit
    </button>
  </form>
);

export default compose(
  setPropTypes({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onFieldChange: PropTypes.func
  }),
  withState(
    'formValues',
    'setFormValue',
    ({ title, content }) => ({ title, content})
  ),
  withHandlers({
    onSubmit: ({ id, onSubmit, formValue }) => event => {
      event.preventDefault();
      onSubmit(id, formValue);
    },
    onFieldChange: ({ formValue, setFormValue }) => event => {
      const { name, value } = event.target;
      setFormValue({ ...formValue, [name]: value});
    }
  })
)(EditArticle)
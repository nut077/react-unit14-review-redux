import React from 'react'
import PropTypes from 'prop-types'
import { withState, withHandlers, compose } from 'recompose'

const EditUser = ({ formUsers: {id, name}, onFieldChange, onSubmit }) => (
  <form>
    <br />
    <label htmlFor='name'>Name</label>
    <input
      type='text'
      name='name'
      value={name}
      onChange={onFieldChange}
    />
    <button type="submit" onClick={onSubmit}>Edit</button>
  </form>
);

EditUser.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default compose(
  withState('formUsers', 'setFormUsers', ({ id, name }) => ({ id, name })),
  withHandlers({
    onSubmit: ({ formUsers, onSubmit }) => event => {
      event.preventDefault();
      onSubmit(formUsers);
    },
    onFieldChange: ({ formUsers, setFormUsers }) => event => {
      const { name, value } = event.target;
      setFormUsers({ ...formUsers, [name]: value});
    }
  })
)(EditUser)
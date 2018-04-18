import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardBody } from './';
import styles from './User.scss'

const User = ({ id, name }) => (
  <div className={styles.user}>
    <Card>
      <CardHeader>
        <Link to={`/users/${id}/edit`} className={styles.edit}>{id}</Link>
      </CardHeader>
      <CardBody>{name}</CardBody>
    </Card>
  </div>
);

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default User
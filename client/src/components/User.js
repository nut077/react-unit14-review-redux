import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardBody } from './';
import styles from './User.scss'

const User = ({ id, name }) => (
  <div className={styles.user}>
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardBody>{id}</CardBody>
    </Card>
  </div>
);

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default User
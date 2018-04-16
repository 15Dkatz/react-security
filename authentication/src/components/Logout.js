import React from 'react';
import { Button } from 'react-bootstrap';

const Logout = props => (
  <Button onClick={props.auth.logout}>Log Out</Button>
);

export default Logout;
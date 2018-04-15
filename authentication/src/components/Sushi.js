import React from 'react';
import { Link } from 'react-router-dom';

const Sushi = () => (
  <div>
    <h2>Sushi</h2>
    <Link to='/'>Home</Link>
    <div><img src='https://i.imgur.com/fp958Jn.jpg' /></div>
  </div>
);

export default Sushi;
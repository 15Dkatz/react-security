import React from 'react';
import { Link } from 'react-router-dom';

const Ramen = () => (
  <div>
    <h2>Ramen</h2>
    <Link to='/'>Home</Link>
    <div><img src='https://i.imgur.com/rPEt1g1.jpg' /></div>
  </div>
);

export default Ramen;
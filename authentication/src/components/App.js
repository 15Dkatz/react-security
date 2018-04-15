import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h2>Foodie Hub</h2>
    <div><Link to='/ramen'>Ramen</Link></div>
    <div><Link to='/sushi'>Sushi</Link></div>
  </div>
);

export default App;
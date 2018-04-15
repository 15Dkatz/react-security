import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Home = () => (
  <div>
    <h2>Foodie Hub</h2>
    <div><Link to='/ramen'>Ramen</Link></div>
    <div><Link to='/sushi'>Sushi</Link></div>
  </div>
);

const App = props => (
  <div>{
    props.auth.isAuthenticated() ? <Home /> : <Login {...props} />
  }</div>
);

export default App;
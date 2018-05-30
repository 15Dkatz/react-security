import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import Logout from './Logout';

const Home = props => (
  <div>
    <h2>Foodie Hub</h2>
    <div><Link to='/ramen'>Ramen</Link></div>
    <div><Link to='/sushi'>Sushi</Link></div>
    <br />
    <Logout {...props} />
  </div>
);

const App = props => (
  <div>{
    props.auth.loggedIn ? <Home {...props} /> : <AuthForm {...props} />
  }</div>
);

export default App;
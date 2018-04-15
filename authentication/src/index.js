import React from 'react';
import { render } from 'react-dom';
import history from './history';
import { Router, Switch, Route } from 'react-router-dom';
import { App, Ramen, Sushi } from './components';
import Auth from './Auth';

const auth = new Auth();

render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={() => <App auth={auth} />} />
      <Route path='/ramen' component={Ramen} />
      <Route path='/sushi' component={Sushi} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
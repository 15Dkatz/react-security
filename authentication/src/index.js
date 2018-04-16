import React from 'react';
import { render } from 'react-dom';
import history from './history';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { App, Ramen, Sushi } from './components';
import Auth from './Auth';

const auth = new Auth();

const callbackComponent = props => {
  if (props.location.hash.includes('access_token')) {
    setTimeout(() => auth.handleAuthentication());
    return <h4>loading...</h4>;
  } else {
    return <Redirect to={{ pathname: '/' }} />
  }
};

render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' render={() => <App auth={auth} />} />
      <Route path='/callback' render={props => callbackComponent(props)} />
      <Route path='/ramen' component={Ramen} />
      <Route path='/sushi' component={Sushi} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
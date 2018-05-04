import auth0, { WebAuth } from 'auth0-js';
import history from './history';

class Auth {
  auth0 = new WebAuth({
    domain: 'react-security-com.auth0.com',
    clientID: '9NJkv57SEU0JfZ7VyFUnQitu4ReiByk4',
    redirectUri: 'http://localhost:1234/callback',
    responseType: 'token'
  });

  loggedIn = false;

  login = () => {
    this.auth0.authorize();
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult) {
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem(
          'expires_at',
          JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
        );

        this.loggedIn = true;

        history.replace('/');
      } else if (err) {
        console.log('err', err);
      }
    });
  }

  logout = () => {
    ['access_token', 'expires_at'].forEach(item => localStorage.removeItem(item));
    this.loggedIn = false;
    history.replace('/');
  }

  isAuthenticated = () => {
    return this.loggedIn &&
      new Date().getTime() < +localStorage.getItem('expires_at');
  }
};

export default Auth;
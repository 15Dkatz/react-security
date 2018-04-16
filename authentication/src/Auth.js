import auth0, { WebAuth } from 'auth0-js';
import history from './history';

class Auth {
  auth0 = new WebAuth({
    domain: 'react-security-co.auth0.com',
    clientID: 'OKc5y1CNnXLXDbuQSkFCvmZp1IffSu7G',
    redirectUri: 'http://localhost:1234/callback',
    responseType: 'token'
  });

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
        history.replace('/');
      } else if (err) {
        console.log('err', err);
      }
    });
  }

  logout = () => {
    ['access_token', 'expires_at']
      .forEach(item => localStorage.removeItem(item));
    history.replace('/');
  }

  isAuthenticated = () => {
    return new Date().getTime() < +localStorage.getItem('expires_at');
  }
};

export default Auth;
import auth0, { WebAuth } from 'auth0-js';

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
    // TODO
  }

  logout = () => {
    // TODO
  }

  isAuthenticated = () => {
    return false;
    // TODO
  }
};

export default Auth;
import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class AuthForm extends Component {
  state = {
    username: '',
    password: ''
  }

  updateInput = type => event => {
    this.setState({ [type]: event.target.value });
  }

  signup = () => {
    console.log('this.state', this.state);
  }

  login = () => {
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div>
        <h2>Foodie Hub</h2>
        <FormGroup>
          <FormControl
            type='text'
            value={this.state.username}
            placeholder='username'
            onChange={this.updateInput('username')}
          />
          <br />
          <FormControl
            type='password'
            value={this.state.password}
            placeholder='password'
            onChange={this.updateInput('password')}
          />
        </FormGroup>
        <Button onClick={this.login}>Log In</Button>
        <span> or </span>
        <Button onClick={this.signup}>Sign Up</Button>
      </div>
    );
  }
}

export default AuthForm;
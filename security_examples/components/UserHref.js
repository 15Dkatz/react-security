import React, { Component } from 'react';

class UserHref extends Component {
  constructor() {
    super();
    this.state = { link: '' };
  }

  updateLink = event => this.setState({ link: event.target.value });

  render() {
    return (
      <div>
        <h3>User Generated Href</h3>
        <a target='_blank' href={this.state.link}>{this.state.link}</a>
        <br />
        <input onChange={this.updateLink} />
      </div>
    )
  }
}

export default UserHref;
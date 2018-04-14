import React, { Component } from 'react';

const inputString = "<input type='text' defaultValue='rendered' />";

class EscapeInput extends Component {
  constructor() {
    super();

    this.state = { title: '' };
  }

  updateTitle = event => this.setState({ title: event.target.value });

  render() {
    return (
      <div>
        <h3>Safe React Input</h3>
        <div>{inputString}</div>
        <h4>{this.state.title}</h4>
        <br />
        <input placeholder='set title...' onChange={this.updateTitle} />
        <br />
      </div>
    )
  }
}

export default EscapeInput;
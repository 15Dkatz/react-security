import React, { Component } from 'react';

const foo = "<input placeholder='Mixed in input...' />";
const bar = "<script>alert('XSS')</script>";
const goo = `<a href='javascript:alert("XSS");'>Click Me</a>`;

class DangerousHTML extends Component {
  componentDidMount() {
    const s = document.createElement('script');
    s.innerHTML = "console.log('XSS created with innerHTML')";
    document.getElementById('danger-div').appendChild(s);
  }

  render() {
    return (
      <div id='danger-div'>
        <h3>Dangerous HTML</h3>
        <div dangerouslySetInnerHTML={{ __html: goo }} />
      </div>
    )
  }
}

export default DangerousHTML;
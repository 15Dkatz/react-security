import React from 'react';
import { render } from 'react-dom';
import { EscapeInput, DangerousHTML, UserHref, Eval } from './components';

render(
  <div>
    <hr />
    <EscapeInput />
    <hr />
    <DangerousHTML />
    <hr />
    <UserHref />
    <hr />
    <Eval />
  </div>,
  document.getElementById('root')
);
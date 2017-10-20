import React, { Component } from 'react';
import './KeyPad.css';
import ResetKeyPad from './ResetKeyPad'
import NumberKeyPad from './NumberKeyPad'
import OperatorKeyPad from './OperatorKeyPad'
import SubmitKeyPad from './SubmitKeyPad'

class KeyPad extends Component {
  render() {
    return (
      <div>
        <div id="TheResetPad"><ResetKeyPad/></div>
        <div id="TheNumberPad"><NumberKeyPad/></div>
        <div id="TheOperatorPad"><OperatorKeyPad/></div>
        <div id="TheSubmitPad"><SubmitKeyPad/></div>
      </div>
    );
  }
}

export default KeyPad;

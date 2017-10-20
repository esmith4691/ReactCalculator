import React, { Component } from 'react';
import './KeyPad.css';

class KeyPad extends Component {
  render() {
    return (
      <div>
        <div id="TheResetPad"></div>
        <div id="TheNumberPad"></div>
        <div id="TheOperatorPad"></div>
        <div id="TheSubmitPad"></div>
      </div>
    );
  }
}

export default KeyPad;

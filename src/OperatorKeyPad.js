import React, { Component } from 'react';

class OperatorKeyPad extends Component {
  render() {
    return React.createElement('div',{},
            this.renderButton('x'),
            this.renderButton(' / '),
            this.renderButton(' - '),
            this.renderButton('+')
            );
  }

  renderButton(symbol) {
    return <button className="KeyPadButton OperatorPadButton" value={symbol}>{symbol}</button>;
  }
}

export default OperatorKeyPad;

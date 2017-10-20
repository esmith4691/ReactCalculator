import React, { Component } from 'react';

class NumberKeyPad extends Component {
  render() {
    return React.createElement('div', {className: 'NumberKeyPad'},
            this.renderButton(9),
            this.renderButton(8),
            this.renderButton(7),
            this.renderButton(6),
            this.renderButton(5),
            this.renderButton(4),
            this.renderButton(3),
            this.renderButton(2),
            this.renderButton(1),
            this.renderButton(0),
            this.renderPointButton()
            );
  }

  renderButton(number) {
    return <button className="KeyPadButton NumberPadButton" value={number}>{number}</button>;
  }

  renderPointButton() {
    return <button id="PointButton" className="KeyPadButton NumberPadButton" value=".">.</button>;
  }
}

export default NumberKeyPad;

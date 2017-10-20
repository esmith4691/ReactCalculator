import React, { Component } from 'react';
import './KeyPad.css';

class KeyPad extends Component {
  render() {
    return React.createElement('div', {className: 'KeyPad'},
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
    return <button className="KeyPadButton NumberPadButton" number={number}>{number}</button>;
  }

  renderPointButton() {
    return <button className="KeyPadButton NumberPadButton" id="PointButton">.</button>;
  }
}

export default KeyPad;

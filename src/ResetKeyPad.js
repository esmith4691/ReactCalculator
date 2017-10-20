import React, { Component } from 'react';

class ResetKeyPad extends Component {
  render() {
    return React.createElement('div',{},
            this.drawCancelButton(),
            this.drawCancelAllButton());
  }

  drawCancelButton(){
    return <button className="KeyPadButton ResetPadButton">C</button>
  }

  drawCancelAllButton(){
    return <button className="KeyPadButton ResetPadButton">CE</button>
  }
}

export default ResetKeyPad;

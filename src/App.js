import React, { Component } from 'react';
import './App.css';
import './KeyPad.css';
import ResetKeyPad from './ResetKeyPad'
import NumberKeyPad from './NumberKeyPad'
import OperatorKeyPad from './OperatorKeyPad'
import SubmitKeyPad from './SubmitKeyPad'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { calculationText: 'CalcText', resultText: 'ResultText'};
  }

  render() {
    return (
      <div id="App">
        <div id="TheCalculator">
          <div id="TheScreen">
            <div className="screenText resultText">{this.state.resultText}</div>
            <div className="screenText calculationText">{this.state.calculationText}</div>
          </div>
          <div ref="TheKeyPad" id="TheKeyPad">
            <div>
              <div id="TheResetPad"><ResetKeyPad/></div>
              <div id="TheNumberPad"><NumberKeyPad/></div>
              <div id="TheOperatorPad"><OperatorKeyPad/></div>
              <div id="TheSubmitPad"><SubmitKeyPad/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

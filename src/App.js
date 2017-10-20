import React, { Component } from 'react';
import './App.css';
import './KeyPad.css';

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
              <div id="TheResetPad">
                <button className="KeyPadButton ResetPadButton">C</button>
                <button className="KeyPadButton ResetPadButton">CE</button>
              </div>
              <div id="TheNumberPad">
                <button className="KeyPadButton NumberPadButton">9</button>
                <button className="KeyPadButton NumberPadButton">8</button>
                <button className="KeyPadButton NumberPadButton">7</button>
                <button className="KeyPadButton NumberPadButton">6</button>
                <button className="KeyPadButton NumberPadButton">5</button>
                <button className="KeyPadButton NumberPadButton">4</button>
                <button className="KeyPadButton NumberPadButton">3</button>
                <button className="KeyPadButton NumberPadButton">2</button>
                <button className="KeyPadButton NumberPadButton">1</button>
                <button className="KeyPadButton NumberPadButton">0</button>
                <button id="PointButton" className="KeyPadButton NumberPadButton">.</button>
              </div>
              <div id="TheOperatorPad">
                <button className="KeyPadButton OperatorPadButton">x</button>
                <button className="KeyPadButton OperatorPadButton">\</button>
                <button className="KeyPadButton OperatorPadButton">-</button>
                <button className="KeyPadButton OperatorPadButton">+</button>
              </div>
              <div id="TheSubmitPad">
                <button className="KeyPadButton SubmitButton">=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

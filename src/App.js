import React, { Component } from 'react';
import './App.css';
import KeyPad from './KeyPad'

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
          <div ref="TheKeyPad" id="TheKeyPad"><KeyPad/></div>
        </div>
      </div>
    );
  }
}

export default App;

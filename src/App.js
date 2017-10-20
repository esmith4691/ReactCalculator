import React, { Component } from 'react';
import './App.css';
import KeyPad from './KeyPad'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="App">
        <div id="TheCalculator">
          <div id="TheScreen">
            <div className="screenText resultText">Placeholder</div>
            <div className="screenText calculationText">Placeholder</div>
          </div>
          <div ref="TheKeyPad" id="TheKeyPad"><KeyPad/></div>
        </div>
      </div>
    );
  }
}

export default App;

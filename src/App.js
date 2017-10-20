import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div id="TheCalculator">
          <div id="TheScreen">
            <div className="screenText resultText">Placeholder</div>
            <div className="screenText calculationText">Placeholder</div>
          </div>
          <div ref="TheKeyPad" id="TheKeyPad"></div>
        </div>
      </div>
    );
  }
}

export default App;

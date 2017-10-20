import React, { Component } from 'react';
import calculator from './calculator.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <header id="App-header">
          <img src={calculator} id="App-logo" alt="logo" />
          <h1 className="App-title">A Tool to Calculate.</h1>
        </header>
        <div id="TheCalculator">
          <div id="TheScreen">
            <div className="screenText resultText">Placeholder</div>
            <div className="screenText calculationText">Placeholder</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

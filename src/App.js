import React, { Component } from 'react';
import './App.css';
import './KeyPad.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      calculationText: 'CalculationText',
      resultText: 'ResultText',
      buttonClicked: (el) => {
        var buttonText = el.target.textContent;
        this.clickButton(buttonText);
      }
    };
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
                {this.drawButton("ResetPadButton","C")}
                {this.drawButton("ResetPadButton","CE")}
              </div>
              <div id="TheNumberPad">
                {this.drawButton("NumberPadButton","9")}
                {this.drawButton("NumberPadButton","8")}
                {this.drawButton("NumberPadButton","7")}
                {this.drawButton("NumberPadButton","6")}
                {this.drawButton("NumberPadButton","5")}
                {this.drawButton("NumberPadButton","4")}
                {this.drawButton("NumberPadButton","3")}
                {this.drawButton("NumberPadButton","2")}
                {this.drawButton("NumberPadButton","1")}
                {this.drawButton("NumberPadButton","0")}
                {this.drawButton("NumberPadButton PointButton",".")}
              </div>
              <div id="TheOperatorPad">
                {this.drawButton("OperatorPadButton","x")}
                {this.drawButton("OperatorPadButton","/")}
                {this.drawButton("OperatorPadButton","-")}
                {this.drawButton("OperatorPadButton","+")}
              </div>
              <div id="TheSubmitPad">
                {this.drawButton("SubmitButton","=")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  drawButton(className, text){
    className = "KeyPadButton " + className;
    return <button className={className} onClick={this.state.buttonClicked}>{text}</button>
  }

  clickButton(text){
    var newText = text;
    this.setState({calculationText: newText});
  }
}

export default App;

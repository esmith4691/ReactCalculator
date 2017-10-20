import React, { Component } from 'react';
import './App.css';
import './KeyPad.css';
import CalculationService from './CalculationService'

class App extends Component {
  constructor(){
    super();

    this.state = {
      calculationText: '0',
      resultText: '0',
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
    var existingCalculationText = this.state.calculationText;
    var existingResultText = this.state.resultText;

    var newCalculationText = existingCalculationText;
    var newResultText = existingResultText;

    switch (text) {
      case "C":
      {
        var exLength = existingCalculationText.length;
        if(exLength < 1)
        {
          newCalculationText = "0";
          newResultText = "0";
        }
        else if(exLength == 1){
          newCalculationText = "0";

          if(existingCalculationText == "0")
            newResultText = "0";
        }
        else {
          newCalculationText = existingCalculationText.substring(0, exLength - 1);
        }
        break;
      }
      case "CE":
      {
        newCalculationText = "0";
        newResultText = "0";
        break;
      }
      case "9":
      case "8":
      case "7":
      case "6":
      case "5":
      case "4":
      case "3":
      case "2":
      case "1":
      case "0":
      case ".":
      case "x":
      case "/":
      case "-":
      case "+":
      {
        if(newCalculationText == "0")
          newCalculationText = text.toString();
        else
          newCalculationText = existingCalculationText + text.toString();
        break;
      }
      case "=":
      {
        newResultText = CalculationService(existingCalculationText);
        newCalculationText = "0";
        break;
      }
      default:
        break;
    }

    this.setState({calculationText: newCalculationText});
    this.setState({resultText: newResultText});
  }
}

export default App;

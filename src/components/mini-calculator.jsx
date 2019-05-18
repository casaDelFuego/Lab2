import React, { Component } from 'react';
import Buttons from './buttons.jsx';

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      result: 0,
      currentNumber: 0,
      operator: null,
      history: []
    };
  }

  render () {
    return <div>
    <h1>Mini Calculator</h1>
    <span>{this.state.operator}</span>
    <input type="text" value={this.state.currentNumber} onChange={this.changeHandler.bind(this)}/>
    <span>{this.state.history}</span>
    <Buttons
    handler={this.handleInput.bind(this)}
    />

    </div>;
  }

  handleInput (op) {
    console.log('button clicked', op)
    switch(op){
      case 'CE':
      this.setState({
        operator: 'CE',
        currentNumber: 0,
        result: 0
      })
      break

      case '+':
      case '-':
      let newHistory = [...this.state.history, op, this.state.currentNumber]
        this.setState({
          history: newHistory,
          currentNumber: 0
        })
      break
      case '=':
        this.setState({currentNumber: this.calculate(this.state.history)})
      default:
      break
    }

    console.log(this.state.currentNumber);
  };

  changeHandler(event) {
    console.log(event.target.value)
    let n = parseFloat(event.target.value)
    if (Number.isNaN(n)){
      n = 0;
    }
    this.setState({currentNumber: n})
  }



  //let currentNumber = "2222"
  // attach change-handler to your input-element to modify `currentNumber`

  // ON BUTTON press. push currentNumber to history,
  // and the operator of the pressed.

  // Each press of a button will cause the history to grow
  // with 2 elements.


  calculate(buffer) {
    let result = 0
    let operator = '='
    buffer.forEach((i) => {
      if (typeof i !== 'number') {
        return operator = i
      }
      switch(operator) {
        case '+':
        result = result + i
        break
        case '-':
        result = result - i
        break
        case '=':
        result = i
        break
        case 'CE':
        result = 0
        break
        default:
        break

      }
    })
    console.log('History: ', buffer.join(' '), result)
    return result
  };

}

export default Calculator;

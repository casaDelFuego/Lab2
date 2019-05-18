import React, { Component } from 'react';
import Buttons from './buttons.jsx';

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentNumber: 0,
      operator: null,
      previousResults: [],
      result: 0
    };
  }

  render () {
    return <div>
    <h1>Mini Calculator</h1>
    <span>{this.state.operator}</span>
    <input type="text" value={this.state.currentNumber} onChange={this.changeHandler.bind(this)}/>
    <br/>

    <Buttons
    handler={this.handleInput.bind(this)}
    />
    <span>{this.state.result}</span>
    </div>;
  }

  handleInput (op) {
    console.log('button clicked', op)
    switch(op){
      case 'CE':
      this.setState({
        operator: 'CE',
        currentNumber: 0,
        result: 0,
        previousResults: []
      })
      break

      case '+':
      case '-':
      let newPreviousResults = [...this.state.previousResults, this.state.currentNumber, op]
        this.setState({
          previousResults: newPreviousResults,
          currentNumber: 0


        })

      break
      case '=':
        this.setState({

          currentNumber: this.calculate(this.state.previousResults),
          result: this.calculate(this.state.previousResults)
        })

      default:
      break
    }

    console.log('the current number', this.state.currentNumber);
  };

  changeHandler(event) {
    console.log('event target value ', event.target.value)
    let n = parseFloat(event.target.value)
    if (Number.isNaN(n)){
      n = 0;
    }
    this.setState({currentNumber: n})
  }


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
    console.log('previousResults: ', buffer.join(' '), result)
    return result
  };

}

export default Calculator;

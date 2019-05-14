import React, { Component } from 'react';
import Buttons from './buttons.jsx';

class Calculator extends Component {
  state = {
    buffer: [[7,'='],[5,'+']],
    operator: null
  };

  render () {
    return <div>
    <h1>Mini Calculator</h1>
    <input type="text" value={this.calculate()}/>
    <Buttons handler={this.handleInput.bind(this)}/>

    </div>;
  }

  handleInput (a) {
    console.log('button clicked', a)
    switch(a){
      case 'CE':
      this.setState({operator: 'CE'})
      break
      case '+':
      this.setState({operator: '+'})
      break
      case '-':
      this.setState({operator: '-'})
      break
      case '=':
      this.setState({operator: '='})
      break
      default:
      this.setState(null)
      break
    }
  }

  calculate() {
    return this.state.buffer.reduce((left, pair)=> {
      let [right, operator] = pair
      switch(operator) {
        case '+':
        return left + right
        case '-':
        return left - right
        case '=':
        return left
        default:
        return 'Err'
      }
    },0)
  }
}

export default Calculator;

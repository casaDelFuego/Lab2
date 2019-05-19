import React, { Component } from 'react';
import Buttons from './buttons.jsx';

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentNumber: 0,
      previousNumber: 0,
      operator: null,
      result: []
    };
  }

  render () {
    let myList = this.state.result.map((i, n) => {
      return <li key={n}>{i}</li>
    })
    return <div className="mini-calc">
    <h2>Mini Calculator</h2>

    <input type="text" value={this.state.currentNumber} onChange={this.changeHandler.bind(this)}/>
    <br/><p>{this.state.previousNumber}</p>

    <Buttons
    handler={this.handleInput.bind(this)}
    />
    <h3>Previous results:</h3>
    <ul>{myList}</ul>
    </div>;
  }

  handleInput (op) {
    console.log('button clicked', op)
    let y = parseFloat(this.state.currentNumber) || 0
    let x = this.state.previousNumber
    switch(op){
      case 'CE':
      this.setState({
        currentNumber: 0,
        previousNumber: 0,
        operator: null
      })
      break

      case '+':
      case '-':{
        let r = this.calculate(x, op, y)
          this.setState({
            previousNumber: r,
            currentNumber: this.state.currentNumber,
            operator: op,
            //result: [...this.state.result, r]
          })
        break
      }


      case '=':{
      let r = this.calculate (x, this.state.operator, y)

        this.setState({
            currentNumber: r,
            result: [...this.state.result, r],
            previousNumber: r
        })
      }
      default:
      break
    }

    console.log('the current number', this.state.currentNumber);
  };

  calculate(x, op, y) {
    switch (op) {
      case '+':
        return x + y
      case '-':
        return x - y
    }
  }

  changeHandler(event) {
    console.log('event target value ', event.target.value)

    this.setState({currentNumber: event.target.value.replace(/^0/,'')})
  }

}

export default Calculator;


// let n = parseFloat(event.target.value)
// if (Number.isNaN(n)){
//   n = 0;
// }

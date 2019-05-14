import React, { Component } from 'react';


class Buttons extends Component {

  render() {
    return (
      <div>
      <button onClick={() => this.props.handler('CE')}>CE</button>
      <button onClick={() => this.props.handler('+')}>+</button>
      <button onClick={() => this.props.handler('-')}>-</button>
      <button onClick={() => this.props.handler('=')}>=</button>
      </div>
    )
  }

  handleClickPlus = event => {

  	}

  handleClickMinus = event => {

    }

  handleClickEqual = event => {

  	}

}
export default Buttons

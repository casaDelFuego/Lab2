import React, { Component } from 'react';


class Buttons extends Component {

  render() {
    return (
      <div className="btns">
      <button onClick={() => this.props.handler('CE')}>CE</button>
      <button onClick={() => this.props.handler('+')}>+</button>
      <button onClick={() => this.props.handler('-')}>-</button>
      <button onClick={() => this.props.handler('=')}>=</button>
      </div>
    )
  }

}
export default Buttons

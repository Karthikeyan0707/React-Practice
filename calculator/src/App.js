import React, { Component } from "react";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      result: 0,
    };
  }
  handleClick = (event) => {
    const value = event.target.innerHTML;
    this.setState({
      input: this.state.input + value,
    });
  };
  calculate = () => {
    let finalInput = this.state.input;
    finalInput = finalInput.replace(/x/g, "*").replace(/÷/g, "/");
    this.setState({
      result: eval(finalInput),
    });
  };
  clear = () => {
    this.setState({
      input: "",
      result: 0,
    });
  };
  render() {
    return (
      <div className="calculator-container">
        <p className="textsize"> MY CALCULATOR APP</p>
        <div>
          <div className="input-container">
            <input type="text" value={this.state.input} readOnly />
            <input type="text" value={this.state.result} readOnly />
          </div>
          <div className="button-container">
            <button onClick={this.clear}>C</button>
            <button onClick={this.handleClick}>7</button>
            <button onClick={this.handleClick}>8</button>
            <button onClick={this.handleClick}>9</button>
            <button onClick={this.handleClick}>/</button>
            <button onClick={this.handleClick}>4</button>
            <button onClick={this.handleClick}>5</button>
            <button onClick={this.handleClick}>6</button>
            <button onClick={this.handleClick}>x</button>
            <button onClick={this.handleClick}>1</button>
            <button onClick={this.handleClick}>2</button>
            <button onClick={this.handleClick}>3</button>
            <button onClick={this.handleClick}>-</button>
            <button onClick={this.handleClick}>+</button>
            <button onClick={this.handleClick}>0</button>
            <button onClick={this.handleClick}>.</button>
          </div>
          <div className="long-button">
            <button onClick={this.calculate}>=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;

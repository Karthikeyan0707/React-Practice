import React, { Component } from "react";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      operation: null,
      storedValue: 0,
    };
  }
  componentDidMount() {
    // Check for stored value in local storage
    const storedValue = localStorage.getItem("storedValue");
    if (storedValue) {
      this.setState({ storedValue });
    }
  }
  handleNumberClick = (number) => {
    this.setState({ value: this.state.value * 10 + number });
  };
  handleOperationClick = (operation) => {
    this.setState({
      storedValue: this.state.value,
      value: 0,
      operation,
    });
  };
  handleEqualClick = () => {
    if (this.state.operation === "+") {
      this.setState({
        value: this.state.storedValue + this.state.value,
        storedValue: 0,
        operation: null,
      });
    } else if (this.state.operation === "-") {
      this.setState({
        value: this.state.storedValue - this.state.value,
        storedValue: 0,
        operation: null,
      });
    } else if (this.state.operation === "*") {
      this.setState({
        value: this.state.storedValue * this.state.value,
        storedValue: 0,
        operation: null,
      });
    } else if (this.state.operation === "/") {
      this.setState({
        value: this.state.storedValue / this.state.value,
        storedValue: 0,
        operation: null,
      });
    } // Store value in local storage
    localStorage.setItem("storedValue", this.state.value);
  };
  handleClearClick = () => {
    this.setState({
      value: 0,
      operation: null,
      storedValue: 0,
    });
    localStorage.removeItem("storedValue");
  };
  render() {
    return (
      <div className="calculator">
        <div>
          <input type="text" value={this.state.value} readOnly />
        </div>
        <div>
          <button onClick={() => this.handleNumberClick(1)}>1</button>
          <button onClick={() => this.handleNumberClick(2)}>2</button>
          <button onClick={() => this.handleNumberClick(3)}>3</button>
          <button onClick={() => this.handleOperationClick("+")}>+</button>
        </div>

        <div>
          <button onClick={() => this.handleNumberClick(4)}>4</button>
          <button onClick={() => this.handleNumberClick(5)}>5</button>
          <button onClick={() => this.handleNumberClick(6)}>6</button>
          <button onClick={() => this.handleOperationClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => this.handleNumberClick(7)}>7</button>
          <button onClick={() => this.handleNumberClick(8)}>8</button>
          <button onClick={() => this.handleNumberClick(9)}>9</button>
          <button onClick={() => this.handleOperationClick("")}></button>
        </div>
        <div>
          <button onClick={() => this.handleNumberClick(0)}>0</button>
          <button onClick={this.handleEqualClick}>=</button>
          <button onClick={() => this.handleOperationClick("/")}>/</button>
          <button onClick={this.handleClearClick}>Clear</button>
        </div>
      </div>
    );
  }
}
export default Calculator;

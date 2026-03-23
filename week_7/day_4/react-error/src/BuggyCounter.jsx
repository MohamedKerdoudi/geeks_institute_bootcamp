import React, { Component } from "react";

export default class BuggyCounter extends Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState(
      (prev) => ({ counter: prev.counter + 1 }),
      () => {
       
        if (this.state.counter === 5) {
          throw new Error("I crashed!");
        }
      }
    );
  };

  render() {
    const style = {
      padding: "1rem",
      margin: "0.5rem",
      background: "#f0f0f0",
      border: "1px solid #ccc",
      cursor: "pointer",
      textAlign: "center",
      width: "80px",
    };
    return (
      <div style={style} onClick={this.handleClick}>
        {this.state.counter}
      </div>
    );
  }
}
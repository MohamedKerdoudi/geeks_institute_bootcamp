import React, { Component } from "react";

export default class LifecycleDemo extends Component {

  state = {
    favoriteColor: "red", 
    timerRunning: false,
  };

  
  componentDidMount() {

    this.timer = setTimeout(() => {
      this.setState({ favoriteColor: "yellow", timerRunning: true });
    }, 2000);
  }

  
  shouldComponentUpdate( ) {
    console.log(" shouldComponentUpdate called");
    return true; 
  }

  getSnapshotBeforeUpdate( ) {
    console.log(" getSnapshotBeforeUpdate");
    
    return null;
  }

  
  componentDidUpdate( ) {
    console.log(" componentDidUpdate – after update");
  }


  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  
  render() {
    const boxStyle = {
      padding: "1rem",
      marginTop: "1rem",
      background: this.state.favoriteColor,
      color: "#fff",
      textAlign: "center",
    };

    return (
      <div>
        <p>
          <strong>Current favorite color:</strong> {this.state.favoriteColor}
        </p>

        <button
          onClick={() => this.setState({ favoriteColor: "blue" })}
          style={{ marginRight: "0.5rem" }}
        >
          Change to BLUE
        </button>

        <button
          onClick={() => this.setState({ favoriteColor: "green" })}
          style={{ marginRight: "0.5rem" }}
        >
          Change to GREEN
        </button>

        <div style={boxStyle}>I change colour based on state</div>
      </div>
    );
  }
}
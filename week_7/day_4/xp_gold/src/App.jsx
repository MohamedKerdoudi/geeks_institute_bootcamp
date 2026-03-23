import React, { Component, createRef } from "react";
import ErrorBoundary from "./ErrorBoundary";

export default class App extends Component {
 
  errorBoundaryRef = createRef();

  handleClick = () => {
  
    if (this.errorBoundaryRef.current) {
      this.errorBoundaryRef.current.occurError();
    }
  };

  render() {
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial, Helvetica, sans-serif" }}>
        <h1>React Modal + ErrorBoundary Demo</h1>


        <button onClick={this.handleClick}>Show error modal</button>
        <ErrorBoundary ref={this.errorBoundaryRef}>
          <></>
        </ErrorBoundary>
      </div>
    );
  }
}
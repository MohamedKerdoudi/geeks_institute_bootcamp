
import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary";

export default class ColumnRight extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      description: '{"function":"I live to crash"}',

      crashed: false
    };
  }

  replaceStringWithObject = () => {
    this.setState({
      description: JSON.parse(this.state.description), 
      crashed: true
    });
  };

  invokeEventHandler = () => {
    throw new Error("Event‑handler error – see console");
  };

  render() {
    const { description } = this.state;

    return (
      <div className="right-column p-3">
        <h2>Right column</h2>

        <p>
          This paragraph never crashes. It just explains what the demo does.
        </p>

        <ErrorBoundary>
         
          <p>{description}</p>
        </ErrorBoundary>

        <button
          className="btn btn-primary me-2"
          onClick={this.replaceStringWithObject}
        >
          Replace string with object
        </button>

        <button className="btn btn-danger" onClick={this.invokeEventHandler}>
          Invoke event handler
        </button>
      </div>
    );
  }
}
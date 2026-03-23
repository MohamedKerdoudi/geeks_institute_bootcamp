import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null };

  
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });

    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.error) {

      const errorStyle = {
        padding: "1rem",
        margin: "0.5rem",
        background: "#ffe6e6",
        border: "1px solid #ff9999",
        color: "#990000",
      };
      return (
        <div style={errorStyle}>
          <h4>Something went wrong.</h4>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
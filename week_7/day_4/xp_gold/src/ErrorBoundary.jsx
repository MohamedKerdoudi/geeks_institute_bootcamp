import React, { Component } from "react";
import Modal from "./Modal";
export default class ErrorBoundary extends Component {
  state = {
    hasError: false,          
    errorInfo: null,          
  };

  
  static getDerivedStateFromError() {
   
    return { hasError: true };
  }


  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
    this.setState({ errorInfo: error });
  }

 
  occurError = () => {

    this.setState(() => {
      throw new Error(" Something went wrong – forced error!");
    });
  };

 
  handleClose = () => {
    this.setState({ hasError: false, errorInfo: null });
  };

  render() {

    if (this.state.hasError) {
      return (
        <Modal onClose={this.handleClose}>
          <h2 style={{ marginTop: 0 }}>An error occurred</h2>
          <p>
            <strong>Message:</strong>{" "}
            {this.state.errorInfo?.message || "Unknown error"}
          </p>
          <pre
            style={{
              background: "#f5f5f5",
              padding: "0.5rem",
              overflowX: "auto",
            }}
          >
            {this.state.errorInfo?.stack}
          </pre>
        </Modal>
      );
    }

    return this.props.children;
  }
}
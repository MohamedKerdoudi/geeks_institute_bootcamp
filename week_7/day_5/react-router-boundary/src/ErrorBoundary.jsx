
import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => window.location.reload();

  render() {
    if (this.state.hasError) {
      return (
        <div className="card my-5 p-3 bg-light">
          <h4>Something went wrong </h4>
          <p>An error occurred in this component.</p>

          {process.env.NODE_ENV === "development" && (
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
          )}

          <button className="btn btn-outline-danger mt-2" onClick={this.handleReload}>
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
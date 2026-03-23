import React, { Component } from "react";

export default class Modal extends Component {

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose?.();
    }
  };

  render() {
    const { children, onClose } = this.props;
    return (
      <div className="modal-background" onClick={this.handleOverlayClick}>
        <div className="modal-body">
          {children}
          <div style={{ textAlign: "right", marginTop: "1rem" }}>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}
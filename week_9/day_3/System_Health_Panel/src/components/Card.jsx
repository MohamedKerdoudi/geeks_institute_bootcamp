import React from "react";

const Card = ({ title, children }) => {
  return (
    <div style={{
      background: "white",
      borderRadius: "8px",
      padding: "16px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      width: "300px",
    }}>
      <h2 style={{ marginBottom: "12px" }}>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
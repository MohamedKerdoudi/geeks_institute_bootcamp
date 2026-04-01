import React from "react";

const BaseButton = ({ text, color = "#007bff", action }) => {
  const handleClick = (e) => {
    if (typeof action === "function") {
      action(e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        backgroundColor: color,
        color: "#fff",
        border: "none",
        padding: "10px 16px",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",
        transition: "0.2s ease"
      }}
      onMouseOver={(e) => (e.target.style.opacity = "0.85")}
      onMouseOut={(e) => (e.target.style.opacity = "1")}
    >
      {text}
    </button>
  );
};

export default BaseButton;

import React from "react";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher"
        style={{
          width: "100%",
          padding: "0.4rem 0.8rem",
          borderRadius: "2px",
          border: "none",
          background: "#121212",
          color: "#fff"
        }}
      />
    </div>
  );
}
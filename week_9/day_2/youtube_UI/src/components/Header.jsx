
import React from "react";
import SearchBar from "./SearchBar";
import HeaderIcons from "./HeaderIcons";

export default function Header() {
  return (
    <header className="header">
      {/* YouTube logo – using a simple text placeholder */}
      <div style={{ color: "#ff0000", fontWeight: "bold", fontSize: "1.2rem" }}>
        YouTube
      </div>

      <SearchBar />

      <HeaderIcons />
    </header>
  );
}

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h2>Theme Switcher</h2>
      <p>Current theme: <strong>{theme}</strong></p>
      <button className="btn-toggle" onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
}
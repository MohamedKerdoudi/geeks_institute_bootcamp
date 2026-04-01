
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import CharCounter from "./CharCounter";

function App() {
  return (
    <ThemeProvider>
      <div className="container">
   
        <ThemeSwitcher />

        <CharCounter />
      </div>
    </ThemeProvider>
  );
}

export default App;
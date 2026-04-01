
import React, { createContext, useState, useEffect } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
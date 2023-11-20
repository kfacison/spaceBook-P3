import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("blue");

  const toggleTheme = () => {
    setTheme(theme === "blue" ? "space" : "blue");
    console.log(theme);
  };
  useEffect(() => {
    // Update the body's data-theme attribute whenever the theme changes
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

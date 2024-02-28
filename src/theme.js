// theme.js

import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("sun"); // default theme

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      setTheme(currentTheme);
      document.documentElement.className = currentTheme; // Ensures the correct class is applied on initial render
    } else {
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDarkMode ? "moon" : "sun";
      setTheme(defaultTheme);
      document.documentElement.className = defaultTheme;
      localStorage.setItem("theme", defaultTheme); // Stores the default theme
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "moon" ? "sun" : "moon";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme; // Applies the new theme class and removes the old one
  };

  return [theme, toggleTheme];
};

export default useTheme;

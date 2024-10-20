"use client";

import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

interface Props {
  children: React.ReactNode;
}

export let themeContext: React.Context<{
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  isDark: boolean;
}>;

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const isDark = theme === "dark";
  themeContext = React.createContext({ theme, setTheme, isDark });

  useEffect(() => {
    const defaultTheme: Theme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";

    setTheme(() => {
      const theme = (localStorage.getItem("theme") as Theme) || defaultTheme;
      localStorage.setItem("theme", theme);
      return theme;
    });
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;

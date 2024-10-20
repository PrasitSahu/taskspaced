"use client";

import { themeContext } from "@/contexts/theme";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { Toggle } from "./ui/toggle";

const ThemeToggle = () => {
  const { setTheme, isDark } = useContext(themeContext);

  return (
    <Toggle
      onClick={() =>
        setTheme(() => {
          const theme = isDark ? "light" : "dark";
          localStorage.setItem("theme", theme);

          return theme;
        })
      }
      className="p-0 h-auto hover:bg-transparent bg-transparent"
    >
      {isDark ? <Sun /> : <Moon />}
    </Toggle>
  );
};

export default ThemeToggle;

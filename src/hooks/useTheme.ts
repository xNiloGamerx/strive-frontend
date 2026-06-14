"use client";

import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTheme() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setTheme(stored ? stored : "light");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme] as const;
}

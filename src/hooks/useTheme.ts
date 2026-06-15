"use client";

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, setTheme] as const;
}

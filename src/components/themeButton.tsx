"use client";

import useTheme from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeButton() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="absolute flex items-center justify-center -top-4 -right-4 hover:top-0 hover:right-0 bg-white dark:bg-black w-10 h-10 z-100 rounded-b-full rounded-l-full transition-all duration-300">
      <SunIcon
        onClick={() => setTheme("light")}
        className="hidden dark:block text-black dark:text-white"
      />
      <MoonIcon
        onClick={() => setTheme("dark")}
        className="block dark:hidden text-black dark:text-white"
      />
    </div>
  );
}

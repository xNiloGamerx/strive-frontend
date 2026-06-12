import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState<string>(() => {
    const stored = localStorage.getItem(key);
    return stored ? stored : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

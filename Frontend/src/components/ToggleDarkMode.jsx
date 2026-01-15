import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ToggleDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
     className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-md"
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}

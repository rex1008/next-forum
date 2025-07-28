"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, SunMoon } from "lucide-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="w-8 h-8 flex justify-center items-center rounded-lg bg-default-100 hover:bg-default-200 cursor-pointer"
    >
      {theme === "light" ? <Moon size={20} /> : <SunMoon size={20} />}
    </div>
  );
};

export default ThemeSwitch;

"use client"

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
    >
      {theme === "light" ? <Moon size={15} /> : <SunMoon size={15} />}
    </div>
  );
};

export default ThemeSwitch;

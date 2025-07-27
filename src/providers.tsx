// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider enableColorScheme={false} attribute="class">
        <NextUIProvider>{children}</NextUIProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from '../providers'
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DISCUSS",
  description: "This is a discuss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header/>
          <div className="max-w-[1024px] px-6 mt-5 mx-auto">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

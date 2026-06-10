import type { Metadata } from "next";
import { geistMono, geistSans } from "@/fonts/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Strive | Login",
  description: "Gym Leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full flex flex-col">{children}</body>
    </html>
  );
}

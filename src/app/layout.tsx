import type { Metadata } from "next";
import { geistMono, geistSans } from "@/fonts/fonts";

import "./globals.css";
import Link from "next/link";
import ThemeButton from "@/components/themeButton";

export const metadata: Metadata = {
  title: "strive",
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
      <body
        className=" relative h-full flex flex-col bg-[#F3F5F9] dark:bg-[#0d0d0e] overflow-hidden"
        cz-shortcut-listen="true"
      >
        {" "}
        {/* Old bg: bg-zinc-50 */}
        <ThemeButton />
        {children}
        <div className="absolute bottom-2 left-[calc(50%-110px)] flex items-center justify-center w-55 gap-2 h-2 text-gray-400">
          <Link href={"/impressum"}>Impressum</Link>
          <span>|</span>
          <Link href={"/datenschutz"}>Datenschutz</Link>
        </div>
      </body>
    </html>
  );
}

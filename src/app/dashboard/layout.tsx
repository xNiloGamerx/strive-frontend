"use client";

import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [userId, setUserId] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);

  useEffect(() => {
    if (!localStorage.getItem("user-id")) {
      redirect("/");
    } else {
      setUserId(localStorage.getItem("user-id"));
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="flex grow p-4 bg-zinc-50 font-sans dark:bg-[#0a0a0a]">
      <Sidebar username={username ? username : ""} />
      <main className="pl-4">{children}</main>
    </div>
  );
}

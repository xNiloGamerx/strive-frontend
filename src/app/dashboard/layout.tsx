"use client";

import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [username, setUsername] = useState<null | string>(null);
  const [weightClass, setWeightClass] = useState<null | string>(null);

  useEffect(() => {
    if (!localStorage.getItem("user-id")) {
      redirect("/");
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }

    if (localStorage.getItem("weight-class")) {
      setWeightClass(localStorage.getItem("weight-class"));
    }
  }, []);

  return (
    <div className="flex grow p-4 bg-zinc-50 font-sans dark:bg-[#0a0a0a]">
      <Sidebar
        username={username ? username : ""}
        weightClass={weightClass ? weightClass : ""}
      />
      <main className="pl-4">{children}</main>
    </div>
  );
}

"use client";

import Sidebar from "@/components/sidebar";
import { redirect } from "next/navigation";
import { type ReactNode, useEffect, useState } from "react";

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
    <div className="relative flex grow p-6 font-sans max-h-screen">
      <Sidebar
        username={username ? username : ""}
        weightClass={weightClass ? weightClass : ""}
      />
      <main className="w-full pl-4">{children}</main>
    </div>
  );
}

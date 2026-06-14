"use client";

import LogTable from "@/components/dashboard/logTable";
import { Log, User } from "@/libs/types";
import { useEffect, useState } from "react";

export default function History() {
  const [userId, setUserId] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);

  const [user, setUser] = useState<User>(() => ({
    id: "5",
    name: "Niklas",
    gender: "Mann",
    weightClass: "100kg",
  }));

  const [logs, setLogs] = useState<Log[]>(() => {
    const out = [];
    for (let i = 0; i <= 100; i++) {
      out.push({
        user,
        date: "15.04.2026",
        time: "15:45:30",
        exercise: "Gewichtheben",
        weight: "45kg",
      });
    }
    return out;
  });

  useEffect(() => {
    document.title = "Logs";

    if (localStorage.getItem("user-id")) {
      setUserId(localStorage.getItem("user-id"));
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="w-full h-full max-h-screen text-black dark:text-gray-100">
      <div className="min-h-0 flex gap-4 flex-1 h-full">
        <LogTable title="Logs" dataPairs={{ Alle: logs }} />
      </div>
    </div>
  );
}

"use client";

import TopUserTable from "@/components/dashboard/topUserTable";
import { User } from "@/libs/types";
import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [userId, setUserId] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);

  const [data, setData] = useState<User[]>(() => {
    const out = [];
    for (let i = 1; i <= 100; i++) {
      out.push({
        id: `id-${i}`,
        name: "Leon",
        gender: "Mann",
        weightClass: "60kg",
        rank: {
          rank: i,
          exercise: "Gewichtheben",
          weight: "50kg",
        },
      });
    }
    return out;
  });

  const [data2, setData2] = useState<User[]>(() => {
    const out = [];
    for (let i = 50; i <= 70; i++) {
      if (i === 60) {
        out.push({
          id: `id-${i}`,
          name: "Niklas",
          gender: "Mann",
          weightClass: "60kg",
          rank: {
            rank: i,
            exercise: "Gewichtheben",
            weight: "50kg",
          },
        });
      } else {
        out.push({
          id: `id-${i}`,
          name: "Leon",
          gender: "Mann",
          weightClass: "60kg",
          rank: {
            rank: i,
            exercise: "Gewichtheben",
            weight: "50kg",
          },
        });
      }
    }
    return out;
  });

  useEffect(() => {
    document.title = "Leaderboard";

    if (localStorage.getItem("user-id")) {
      setUserId(localStorage.getItem("user-id"));
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="w-full h-full max-h-screen text-black dark:text-gray-100">
      <TopUserTable
        title="Leaderboard"
        dataPairs={{ Alle: data, Sie: data2 }}
      />
    </div>
  );
}

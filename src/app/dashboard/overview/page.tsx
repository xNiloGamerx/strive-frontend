"use client";

import TopUserTable from "@/components/dashboard/topUserTable";
import { useEffect, useState } from "react";

export default function Overview() {
  const [userId, setUserId] = useState<null | string>(null);
  const [username, setUsername] = useState<null | string>(null);

  const [data, setData] = useState<User[]>(() => [
    {
      id: "1",
      name: "Niklas",
      gender: "Mann",
      weightClass: "50kg",
      rank: {
        rank: 1,
        exercise: "Gewichtheben",
        weight: "100kg",
      },
    },
    {
      id: "2",
      name: "Laurence",
      gender: "Mann",
      weightClass: "80kg",
      rank: {
        rank: 2,
        exercise: "Gewichtheben",
        weight: "95kg",
      },
    },
    {
      id: "3",
      name: "Jan",
      gender: "Mann",
      weightClass: "80kg",
      rank: {
        rank: 3,
        exercise: "Gewichtheben",
        weight: "75kg",
      },
    },
    {
      id: "4",
      name: "Jakob",
      gender: "Mann",
      weightClass: "80kg",
      rank: {
        rank: 4,
        exercise: "Gewichtheben",
        weight: "50kg",
      },
    },
    {
      id: "5",
      name: "Philipp",
      gender: "Mann",
      weightClass: "100kg",
      rank: {
        rank: 5,
        exercise: "Gewichtheben",
        weight: "35kg",
      },
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("user-id")) {
      setUserId(localStorage.getItem("user-id"));
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="text-black dark:text-gray-100">
      <div>
        <div>
          <div className="bg-white w-full rounded-md p-2 shadow-md">
            <TopUserTable data={data} />
          </div>
          <div>Quick Daten Eintragen</div>
        </div>
        <div>Diagramm mein Fortschritt</div>
        <div>
          <div>Gemeinschafts-Übungsrang</div>
          <div>Aktuelle Herausforderungen</div>
        </div>
      </div>
    </div>
  );
}

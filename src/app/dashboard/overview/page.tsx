"use client";

import InputData from "@/components/dashboard/inputData";
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
    <div className="w-full h-full text-black dark:text-gray-100">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="flex gap-4 flex-1">
          <div className="flex-2 bg-white w-full rounded-md p-2 shadow-md">
            <TopUserTable data={data} />
          </div>
          <div className="flex-1 bg-white w-full rounded-md p-2 shadow-md">
            <InputData />
          </div>
        </div>
        <div className="flex flex-2 gap-4">
          <div className="bg-white w-full rounded-md p-2 shadow-md">
            Diagramm mein Fortschritt
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-white flex-1 w-full rounded-md p-2 shadow-md">
              Gemeinschafts-Übungsrang
            </div>
            <div className="bg-white flex-1 w-full rounded-md p-2 shadow-md">
              Aktuelle Herausforderungen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

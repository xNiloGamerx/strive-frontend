"use client";

import InputData from "@/components/dashboard/inputData";
import PersonalProgressDiagram from "@/components/dashboard/personalProgressDiagram";
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

  const [personalProgressData, setPersonalProgressData] = useState<
    ProgressData[]
  >(() => [
    {
      day: new Date("2026-06-08"),
      weight: 50,
    },
    {
      day: new Date("2026-06-09"),
      weight: 70,
    },
    {
      day: new Date("2026-06-10"),
      weight: 65,
    },
    {
      day: new Date("2026-06-11"),
      weight: 75,
    },
    {
      day: new Date("2026-06-12"),
      weight: 80,
    },
    {
      day: new Date("2026-06-13"),
      weight: 78,
    },
    {
      day: new Date("2026-06-14"),
      weight: 85,
    },
    {
      day: new Date("2026-06-15"),
      weight: 90,
    },
    {
      day: new Date("2026-06-16"),
      weight: 92,
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
      <div className="flex flex-col gap-4 w-full h-full">
        <div className="flex gap-4 flex-2">
          <div className="flex-2 bg-white w-full rounded-md p-2 shadow-md">
            <TopUserTable data={data} />
          </div>
          <div className="flex-1 bg-white w-full rounded-md p-2 shadow-md">
            <InputData />
          </div>
        </div>
        <div className="flex gap-4 flex-3">
          <div className="flex bg-white w-full rounded-md p-2 shadow-md flex-3">
            <PersonalProgressDiagram data={personalProgressData} />
          </div>
          <div className="flex flex-col gap-4 flex-2">
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

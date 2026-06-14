"use client";

import InputData from "@/components/dashboard/inputData";
import PersonalProgressDiagram from "@/components/dashboard/personalProgressDiagram";
import StreakDisplay from "@/components/dashboard/streakDisplay";
import TopUserTable from "@/components/dashboard/topUserTable";
import type { ProgressData, User } from "@/libs/types";
import type { Metadata } from "next";
import Head from "next/head";
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
    {
      id: "3",
      name: "Jan",
      gender: "Mann",
      weightClass: "80kg",
      rank: {
        rank: 6,
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
        rank: 7,
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
        rank: 8,
        exercise: "Gewichtheben",
        weight: "35kg",
      },
    },
  ]);

  const [data2, setData2] = useState<User[]>(() => [
    {
      id: "3",
      name: "Jan",
      gender: "Mann",
      weightClass: "80kg",
      rank: {
        rank: 6,
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
        rank: 7,
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
        rank: 8,
        exercise: "Gewichtheben",
        weight: "35kg",
      },
    },
    {
      id: "5",
      name: "Philipp",
      gender: "Mann",
      weightClass: "100kg",
      rank: {
        rank: 8,
        exercise: "Gewichtheben",
        weight: "35kg",
      },
    },
  ]);

  // const [friendsData, setFriendsData] = useState<User[]>(() => [
  //   {
  //     id: "6",
  //     name: "Leon",
  //     gender: "Mann",
  //     weightClass: "60kg",
  //     rank: {
  //       rank: 64,
  //       exercise: "Gewichtheben",
  //       weight: "50kg",
  //     },
  //   },
  //   {
  //     id: "7",
  //     name: "Phillip",
  //     gender: "Mann",
  //     weightClass: "80kg",
  //     rank: {
  //       rank: 10,
  //       exercise: "Gewichtheben",
  //       weight: "140kg",
  //     },
  //   },
  //   {
  //     id: "8",
  //     name: "Tim",
  //     gender: "Mann",
  //     weightClass: "50kg",
  //     rank: {
  //       rank: 15,
  //       exercise: "Gewichtheben",
  //       weight: "56kg",
  //     },
  //   },
  //   {
  //     id: "9",
  //     name: "Tobi",
  //     gender: "Mann",
  //     weightClass: "45kg",
  //     rank: {
  //       rank: 20,
  //       exercise: "Gewichtheben",
  //       weight: "49kg",
  //     },
  //   },
  //   {
  //     id: "10",
  //     name: "Jakob",
  //     gender: "Mann",
  //     weightClass: "80kg",
  //     rank: {
  //       rank: 4,
  //       exercise: "Gewichtheben",
  //       weight: "50kg",
  //     },
  //   },
  //   {
  //     id: "11",
  //     name: "Alex",
  //     gender: "Mann",
  //     weightClass: "80kg",
  //     rank: {
  //       rank: 25,
  //       exercise: "Gewichtheben",
  //       weight: "40kg",
  //     },
  //   },
  //   {
  //     id: "12",
  //     name: "Andi",
  //     gender: "Mann",
  //     weightClass: "80kg",
  //     rank: {
  //       rank: 28,
  //       exercise: "Gewichtheben",
  //       weight: "39kg",
  //     },
  //   },
  //   {
  //     id: "13",
  //     name: "Dennis",
  //     gender: "Mann",
  //     weightClass: "50kg",
  //     rank: {
  //       rank: 30,
  //       exercise: "Gewichtheben",
  //       weight: "30kg",
  //     },
  //   },
  //   {
  //     id: "14",
  //     name: "Nils",
  //     gender: "Mann",
  //     weightClass: "80kg",
  //     rank: {
  //       rank: 35,
  //       exercise: "Gewichtheben",
  //       weight: "25kg",
  //     },
  //   },
  // ]);

  const [friendsData, setFriendsData] = useState<User[]>(() => {
    const out = [];
    for (let i = 0; i <= 100; i++) {
      out.push({
        id: "6",
        name: "Leon",
        gender: "Mann",
        weightClass: "60kg",
        rank: {
          rank: 10,
          exercise: "Gewichtheben",
          weight: "50kg",
        },
      });
    }
    return out;
  });

  const [personalProgressData, setPersonalProgressData] = useState<
    ProgressData[]
  >(() => [
    {
      day: "2026-06-08",
      weight: 50,
    },
    {
      day: "2026-06-09",
      weight: 70,
    },
    {
      day: "2026-06-10",
      weight: 65,
    },
    {
      day: "2026-06-11",
      weight: 75,
    },
    {
      day: "2026-06-12",
      weight: 80,
    },
    {
      day: "2026-06-13",
      weight: 78,
    },
    {
      day: "2026-06-14",
      weight: 85,
    },
  ]);

  useEffect(() => {
    document.title = "Overview";

    if (localStorage.getItem("user-id")) {
      setUserId(localStorage.getItem("user-id"));
    }

    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="w-full h-full max-h-screen text-black dark:text-gray-100">
      <div className="h-full max-h-screen flex flex-col gap-4">
        <div className="min-h-0 flex gap-4 flex-1">
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-white rounded-md p-2 shadow-md flex-2">
              <InputData />
            </div>
            <div className="bg-white rounded-md p-2 shadow-md flex-1">
              <StreakDisplay />
            </div>
          </div>
          <div className="bg-white rounded-md p-2 shadow-md flex-2">
            <TopUserTable
              title="Top Sportler"
              pillText="Top 8"
              dataPairs={{
                "Top 10": data,
                Sie: data2,
              }}
            />
          </div>
        </div>
        <div className="min-h-0 flex gap-4 flex-1 h-full">
          <div className="flex bg-white rounded-md p-2 shadow-md flex-2">
            <PersonalProgressDiagram data={personalProgressData} />
          </div>
          <div className="flex flex-col bg-white rounded-md p-2 shadow-md flex-1">
            <TopUserTable
              title="Freunde"
              pillText="Alle"
              dataPairs={{
                Friends: friendsData.sort((a, b) => {
                  if (!(a.rank && b.rank)) return 0;
                  return a.rank.rank - b.rank.rank;
                }),
                "Top 3": data2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useTemplates } from "@/features/templates/hooks";
import { useWorkouts } from "@/features/workouts/hook";
import { ArrowRightIcon, PlayIcon } from "lucide-react";
import Link from "next/link";

export default function WorkoutPage() {
  const { data } = useTemplates();
  const workoutsData = useWorkouts();
  console.log(workoutsData.data);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <Link href="/dashboard/templates">
          <div
            title="Gehe zu Templates"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <h1 className="font-bold text-2xl">Vorlagen</h1>
            <ArrowRightIcon className="transition-[translate] group-hover:translate-x-2" />
          </div>
        </Link>
        <div className="flex gap-2 flex-wrap">
          {data?.map((template) => (
            <div
              key={template.id}
              className="relative flex items-center justify-between flex-1 basis-60 max-w-60 p-2 text-ellipsis bg-white dark:bg-black rounded-md"
            >
              <p>{template.name}</p>
              <button
                type="button"
                className="p-2 rounded-full bg-black dark:bg-white cursor-pointer hover:opacity-85 active:opacity-75"
              >
                <PlayIcon
                  width={16}
                  height={16}
                  className="text-white dark:text-black"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/dashboard/workout/history">
          <div
            title="Gehe zur Workout Historie"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <h1 className="font-bold text-2xl">Letzte Workouts</h1>
            <ArrowRightIcon className="transition-[translate] group-hover:translate-x-2" />
          </div>
        </Link>
        <div className="flex gap-2 flex-wrap">
          {workoutsData.data?.map((workout) => (
            <div
              key={workout.id}
              className="relative flex flex-col gap-2 flex-1 p-2 text-ellipsis bg-white dark:bg-black rounded-md"
            >
              <div className="flex flex-col">
                <h2 className="font-bold text-lg">{workout.template.name}</h2>
                <p className="text-gray-400">
                  {new Intl.DateTimeFormat("de-DE", {
                    weekday: "long",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                    .format(new Date(workout.startTime))
                    .replace(/,([^,]*)$/, " um $1")}
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">Sets</h3>
                {workout.sets.map((set) => (
                  <div key={set.id} className="flex gap-1">
                    <p className="text-gray-400">{set.reps}</p>
                    <p className="text-gray-400">x</p>
                    <p className="text-gray-400">{set.exersice.name}</p>
                    <p className="ml-2 text-gray-400">{set.weight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

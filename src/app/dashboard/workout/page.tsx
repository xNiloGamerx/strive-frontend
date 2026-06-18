"use client";

import { useTemplates } from "@/features/templates/hooks";
import { useWorkouts } from "@/features/workouts/hook";
import { getTimeDifference } from "@/libs/utils";
import { ArrowRightIcon, ClockIcon, PlayIcon, WeightIcon } from "lucide-react";
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
            <h1 className="font-bold text-2xl text-black dark:text-white">
              Vorlagen
            </h1>
            <ArrowRightIcon className="transition-[translate] group-hover:translate-x-2 text-black dark:text-white" />
          </div>
        </Link>
        <div className="flex gap-2 flex-wrap">
          {data?.map((template) => (
            <div
              key={template.id}
              className="relative flex items-center justify-between flex-1 basis-60 max-w-60 px-4 py-2 text-ellipsis bg-white dark:bg-black rounded-md"
            >
              <p className="text-black dark:text-white">{template.name}</p>
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
            <h1 className="font-bold text-2xl text-black dark:text-white">
              Letzte Workouts
            </h1>
            <ArrowRightIcon className="transition-[translate] group-hover:translate-x-2 text-black dark:text-white" />
          </div>
        </Link>
        <div className="flex gap-2 flex-wrap">
          {workoutsData.data?.map((workout) => {
            const startDate = new Date(workout.startTime);
            const endDate = new Date(workout.endTime);

            const timeDifference = getTimeDifference(startDate, endDate);

            let fullWeight = 0;
            workout.exercises.forEach((exercise) => {
              exercise.sets.forEach((set) => {
                fullWeight += Number(set.weight);
              });
            });

            return (
              <div
                key={workout.id}
                className="relative flex flex-col justify-between gap-4 flex-1 px-4 py-2 text-ellipsis bg-white dark:bg-black rounded-md"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <h2 className="font-bold text-lg text-black dark:text-white">
                      {workout.template.name}
                    </h2>
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
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-black dark:text-white">
                        Sets
                      </h3>
                      {workout.exercises.map((exercise) => (
                        <div
                          key={exercise.exercise.id}
                          className="flex gap-1 text-gray-600"
                        >
                          <p>{exercise.sets.length}</p>
                          <p>x</p>
                          <p className="text-nowrap text-ellipsis">
                            {exercise.exercise.name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-black dark:text-white">
                        Bestes Set
                      </h3>
                      {workout.exercises.map((exercise) => {
                        let bestSet = exercise.sets[0];
                        exercise.sets.forEach((set) => {
                          if (set.weight > bestSet.weight) {
                            bestSet = set;
                          }
                        });

                        return (
                          <div
                            key={bestSet.id}
                            className="flex gap-1 text-gray-600"
                          >
                            <p>{bestSet.weight}kg</p>
                            <p>x</p>
                            <p>{bestSet.reps}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <ClockIcon
                      width={18}
                      height={18}
                      className="text-black dark:text-white"
                    />
                    <p className="text-black dark:text-white">
                      {timeDifference.hours > 0 && `${timeDifference.hours}h`}
                    </p>
                    <p className="text-black dark:text-white">
                      {timeDifference.minutes > 0 &&
                        `${timeDifference.minutes}m`}
                    </p>
                    <p className="text-black dark:text-white">
                      {timeDifference.seconds > 0 &&
                        `${timeDifference.seconds}s`}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <WeightIcon
                      width={18}
                      height={18}
                      className="text-black dark:text-white"
                    />
                    <p className="text-black dark:text-white">{fullWeight}kg</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

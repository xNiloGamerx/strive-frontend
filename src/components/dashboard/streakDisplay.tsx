import { CheckIcon, FlameIcon } from "lucide-react";
import { useState } from "react";

type Day = {
  label: string;
  trained: boolean;
};

export default function StreakDisplay() {
  const [days, setDays] = useState<Day[]>(() => [
    {
      label: "Mon",
      trained: true,
    },
    {
      label: "Die",
      trained: true,
    },
    {
      label: "Mit",
      trained: true,
    },
    {
      label: "Don",
      trained: false,
    },
    {
      label: "Fre",
      trained: false,
    },
    {
      label: "Sam",
      trained: false,
    },
    {
      label: "Son",
      trained: false,
    },
  ]);

  return (
    <div className="flex gap-2 w-full h-full">
      <div className="flex flex-col items-center justify-center gap-2 flex-1 h-full bg-gray-50 dark:bg-gray-700 rounded-md">
        <FlameIcon className="w-20 h-20" />
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl">142 Tage</p>
          <p className="text-gray-600">Trainings Streak</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-2 h-full">
        <div className="flex flex-col gap-2 flex-1">
          <div>
            <p className="text-gray-600">
              <span className="text-black dark:text-white text-2xl">5863</span>/
              <span>8000</span>
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-6 bg-gray-400 dark:bg-gray-700 rounded-full"></div>
            <div className="absolute top-0 left-0 w-15 h-6 bg-black dark:bg-white rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 flex-2 bg-gray-50 dark:bg-gray-700 rounded-4xl">
          {days.map((day) => (
            <div
              key={day.label}
              className="flex flex-col items-center justify-between gap-1"
            >
              <div
                className={`${day.trained ? "bg-black dark:bg-white" : "bg-gray-400"} rounded-full w-8 h-8 p-1`}
              >
                {day.trained && (
                  <CheckIcon className="w-full h-full text-white dark:text-black" />
                )}
              </div>
              <p>{day.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

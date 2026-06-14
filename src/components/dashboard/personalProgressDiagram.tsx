import useDarkMode from "@/hooks/useDarkMode";
import { ProgressData } from "@/libs/types";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface PersonalProgressDiagram {
  data: ProgressData[];
}

export default function PersonalProgressDiagram({
  data,
}: PersonalProgressDiagram) {
  const isDarkMode = useDarkMode();

  const CustomTick = ({ x, y, payload, index, visibleTicksCount }) => {
    const isFirst = index === 0;
    const isLast = index === visibleTicksCount - 1;

    return (
      <text
        x={isLast ? x + 18 : x}
        y={isFirst || isLast ? y + 16 + 15 : y + 16}
        textAnchor={isLast ? "end" : isFirst ? "start" : "middle"}
        fill={isDarkMode ? "#fff" : "#000"}
      >
        {payload.value}
      </text>
    );
  };

  return (
    <div className="w-full h-full flex flex-col rounded-md overflow-hidden border border-gray-300 dark:border-gray-700">
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl">Mein Fortschritt</h2>
      </div>
      <div className="p-8 grow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            className="aspect-[1.618]"
            data={data}
            margin={{
              top: 5,
              right: 20,
              bottom: 0,
              left: 0,
            }}
          >
            <CartesianGrid
              stroke="#aaa"
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />
            <Line
              type="linear"
              dataKey="weight"
              stroke={isDarkMode ? "white" : "black"}
              strokeWidth={2}
              name="Gewicht"
            />
            <XAxis dataKey="day" tick={CustomTick} />
            <YAxis
              width="auto"
              label={{ value: "Gewicht", position: "insideLeft", angle: -90 }}
            />
            <Legend verticalAlign="bottom" align="center" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
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
  return (
    <div className="flex flex-col w-full rounded-md overflow-hidden border border-gray-300">
      <div className="px-4 py-2">
        <h2 className="font-bold text-xl">Mein Fortschritt</h2>
      </div>
      <div className="flex flex-1 p-2">
        <LineChart
          className="w-full h-full aspect-[1.618]"
          responsive
          data={data}
          margin={{
            top: 5,
            right: 10,
            bottom: 0,
            left: 10,
          }}
        >
          <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
          <Line
            type="linear"
            dataKey="weight"
            stroke="purple"
            strokeWidth={2}
            name="Gewicht"
          />
          <XAxis
            dataKey="day"
            tickFormatter={(value: Date) => value.toDateString()}
          />
          <YAxis
            width="auto"
            label={{ value: "Gewicht", position: "insideLeft", angle: -90 }}
          />
          <Legend align="right" />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}

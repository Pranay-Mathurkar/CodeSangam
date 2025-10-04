import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function GraphCard() {
  const data = [
    { day: "Mon", progress: 70 },
    { day: "Tue", progress: 85 },
    { day: "Wed", progress: 60 },
    { day: "Thu", progress: 90 },
    { day: "Fri", progress: 75 },
    { day: "Sat", progress: 95 },
    { day: "Sun", progress: 80 },
  ];

  return (
    <div className="bg-black p-6 rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition h-full">
      <h3 className="text-lg font-semibold text-yellow-400 mb-4">📊 Daily Progress</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="day" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip
              contentStyle={{ backgroundColor: "#111", border: "none" }}
              labelStyle={{ color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#FFD700"
              strokeWidth={3}
              dot={{ r: 5, strokeWidth: 2, fill: "#FFD700" }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
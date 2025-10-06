


import { useState, useMemo } from "react";


export default function AlchemyOrb({
  totalDoses = 0,
  taken = 0,
  late = 0,
  notTaken = 0,
  hydration = 0,
  sleep = 0,
  mood = "Good",
}) {
  const [hover, setHover] = useState(false);

  const percent =
    totalDoses === 0
      ? 0
      : Math.round(((taken + late * 0.5) / totalDoses) * 100);

  return (
    <div
      className="fixed bottom-8 right-8 flex flex-col items-center z-40"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ cursor: "pointer" }}
    >
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-500 via-orange-400 to-yellow-600 shadow-[0_0_25px_rgba(255,215,0,0.5)] animate-pulse flex items-center justify-center text-black font-bold text-2xl">
          {percent}%
        </div>
        <span className="absolute w-32 h-32 rounded-full bg-yellow-500 opacity-20 animate-ping"></span>
        <span className="absolute w-36 h-36 rounded-full bg-orange-400 opacity-10 animate-ping delay-200"></span>
      </div>

      {hover && (
        <div className="mt-3 p-4 w-64 bg-black rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.4)] flex flex-col gap-2 text-gray-200">
          <p className="text-yellow-400 font-semibold text-lg">Today's Summary</p>
          <p>💊 Medicine Taken: {taken}/{totalDoses}</p>
          <p>⏰ Taken Late: {late}</p>
          <p>❌ Not Taken: {notTaken}</p>
          <p>💧 Hydration: {hydration} L</p>
          <p>😴 Sleep: {sleep} hrs</p>
          <p>😊 Mood: {mood}</p>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";

export default function AlchemyOrb() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed bottom-8 right-8 flex flex-col items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-500 via-orange-400 to-yellow-600 shadow-[0_0_25px_rgba(255,215,0,0.5)] animate-pulse flex items-center justify-center text-black font-bold text-lg cursor-pointer">
          75%
        </div>
        <span className="absolute w-32 h-32 rounded-full bg-yellow-500 opacity-20 animate-ping"></span>
        <span className="absolute w-36 h-36 rounded-full bg-orange-400 opacity-10 animate-ping delay-200"></span>
      </div>

      {hover && (
        <div className="mt-3 p-4 w-64 bg-black rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.4)] flex flex-col gap-2 text-gray-200">
          <p className="text-yellow-400 font-semibold">Today's Summary</p>
          <p>💊 Medicine Taken: 3/4</p>
          <p>💧 Hydration: 1.5L</p>
          <p>😴 Sleep: 7 hrs</p>
          <p>😊 Mood: Good</p>
        </div>
      )}
    </div>
  );
}
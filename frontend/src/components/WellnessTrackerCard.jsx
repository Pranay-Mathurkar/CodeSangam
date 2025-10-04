import { Moon, Droplet, Smile, Dumbbell } from "lucide-react";

export default function WellnessTrackerCard() {
  return (
    <div className="bg-black p-6 rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition h-full">
      <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
        🧘 Wellness Tracker
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
          <Moon className="text-yellow-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Sleep</p>
          <p className="text-sm text-gray-400">7 hrs</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
          <Droplet className="text-yellow-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Hydration</p>
          <p className="text-sm text-gray-400">1.8 L</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
          <Smile className="text-yellow-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Mood</p>
          <p className="text-sm text-gray-400">😊 Good</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg flex flex-col items-center">
          <Dumbbell className="text-yellow-400 mb-2" size={22} />
          <p className="text-gray-200 font-medium">Exercise</p>
          <p className="text-sm text-gray-400">30 min</p>
        </div>
      </div>
    </div>
  );
}
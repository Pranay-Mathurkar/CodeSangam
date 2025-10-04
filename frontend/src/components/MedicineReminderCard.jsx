import { Clock, Pill, BellRing } from "lucide-react";

export default function MedicineReminderCard() {
  return (
    <div className="bg-black p-6 rounded-2xl shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] transition h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
          <Pill size={20} /> Morning Dose
        </h3>
        <span className="text-xs text-gray-400">Today</span>
      </div>

      <div className="mb-4">
        <p className="text-gray-200 font-medium">Amoxicillin 500mg</p>
        <p className="text-sm text-gray-400">Take after breakfast with water</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-300">
          <Clock size={18} className="text-yellow-400" />
          <span>08:00 AM</span>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <BellRing size={18} className="text-yellow-400 animate-pulse" />
          <span className="text-sm">Reminder On</span>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-400 transition">
          Mark as Taken
        </button>
        <button className="flex-1 bg-gray-800 text-gray-300 py-2 rounded-lg hover:bg-gray-700 transition">
          Snooze
        </button>
      </div>
    </div>
  );
}
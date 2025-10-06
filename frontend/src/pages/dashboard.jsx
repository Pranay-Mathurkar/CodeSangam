
import React, { useContext, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";




export default function Dashboard() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, trackIntake } = useContext(AuthContext);
  const navigate = useNavigate();

  const [doses, setDoses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(new Date());

 


  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(interval);
  }, []);

  


  const fetchDoses = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:3000/medicine/today?token=${token}`);
      const json = await res.json();
      setDoses(Array.isArray(json) ? json : []);
    } catch {
      setDoses([]);
    }
    setLoading(false);
  };



 

  useEffect(() => {
    if (user) {
      fetchDoses();
      const intervalId = setInterval(fetchDoses, 60000);
      return () => clearInterval(intervalId);
    }
  }, [user]);




 

  const handleIntake = async (medicineId, scheduledTime, markedStatus) => {
    try {
      const now = new Date();
      const scheduled = new Date(scheduledTime);
      const isLate = markedStatus === "taken" && now - scheduled > 60 * 60 * 1000;
      const sendStatus = isLate ? "late" : markedStatus;

      await trackIntake(medicineId, scheduledTime, sendStatus);
      await fetchDoses(); 
      

    } catch (e) {
      console.error("Track intake failed:", e);
    }
  };



  

  const getDisplayStatus = (dose) => {
    const medTime = new Date(dose.scheduledTime);
    const diffMins = (now - medTime) / (1000 * 60);

    if (dose.log) {
      if (dose.log.status === "taken") return "taken";
      if (dose.log.status === "late") return "late";
      if (dose.log.status === "missed") return "missed";
    }

    if (diffMins < 0) return "upcoming"; 
    if (diffMins >= 0 && diffMins <= 60) return "due";
    return "missed"; 
  };

  const sortedDoses = [...doses].sort(
    (a, b) => new Date(a.scheduledTime) - new Date(b.scheduledTime)
  );

  // Progress bar 



  const pastOrNow = sortedDoses.filter(d => new Date(d.scheduledTime) <= now);
  const onTime = pastOrNow.filter(d => getDisplayStatus(d) === "taken").length;
  const late = pastOrNow.filter(d => getDisplayStatus(d) === "late").length;
  const missed = pastOrNow.filter(d => getDisplayStatus(d) === "missed").length;
  const total = sortedDoses.length;
  const greenWidth = total === 0 ? 0 : (onTime / total) * 100;
  const yellowWidth = total === 0 ? 0 : (late / total) * 50;

  return (
    <div className="flex min-h-screen bg-black text-gray-100 relative">


      {/* Mobile Sidebar */}



      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="absolute inset-0 bg-black/50 transition-opacity"
          />
          <div className="relative w-64 bg-black p-4 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-yellow-400">
                {user?.name || "Alchemist"}
              </span>
              <button
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Close sidebar"
                className="p-2 rounded-md hover:bg-gray-900 transition"
              >
                <X className="h-6 w-6 text-gray-200" />
              </button>
            </div>
            <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Section */}


      <div className="flex flex-col flex-1">

        {/* Topbar */}


        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-black">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-900 transition"
            aria-label="Open sidebar"
          >
            <Menu className="h-6 w-6 text-yellow-400" />
          </button>
          <Topbar />
        </div>

        {/* Content */}


        <main className="p-8 flex-1">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Welcome back, {user?.name || "Alchemist"} ✨
          </h2>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => navigate("/medicine")}
              className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-medium py-2 px-4 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.3)]"
            >
              + Add Medicine
            </button>
            <button
              onClick={() => navigate("/getUserHistory")}
              className="bg-gray-800 hover:bg-gray-700 transition text-gray-200 font-medium py-2 px-4 rounded-lg"
            >
              Manage Medicine
            </button>
          </div>

          <div className="flex gap-10">


            {/* Left: Medicine list */}


            <div className="w-full max-w-xl">
              <h3 className="text-xl text-yellow-300 mb-4 font-semibold">
                Medicines To Take Today
              </h3>
              {loading ? (
                <div className="text-yellow-500">Loading...</div>
              ) : total === 0 ? (
                <div className="bg-[#18181b] border border-yellow-400/30 px-8 py-10 text-yellow-400 rounded-lg shadow-[0_0_20px_#FFD70022]">
                  No medicine for today
                </div>
              ) : (
                sortedDoses.map((dose) => {
                  const doseStatus = getDisplayStatus(dose);
                  let statusColor =
                    doseStatus === "taken"
                      ? "bg-green-600"
                      : doseStatus === "late"
                      ? "bg-yellow-500 text-black"
                      : doseStatus === "missed"
                      ? "bg-red-600"
                      : "bg-blue-500";

                  return (
                    <div
                      key={dose.medicineId + dose.scheduledTime}
                      className={`mb-6 bg-[#18181b] rounded-xl px-6 py-4 border-l-4 shadow ${statusColor}`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <span className="text-yellow-300 font-medium text-lg">
                            {dose.name}
                          </span>
                          <div className="text-gray-300 text-sm">
                            Time:{" "}
                            <span className="text-yellow-200 font-bold">
                              {new Date(dose.scheduledTime).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                        </div>

                        {/* Action Buttons  */}


                        <div className="flex gap-2 mt-4 md:mt-0">
                          {doseStatus === "upcoming" ? (
                            <span className="ml-4 font-semibold text-blue-300">Upcoming</span>
                          ) : doseStatus === "due" ? (
                            <>
                              <button
                                className="bg-green-400 hover:bg-green-600 text-black px-4 py-2 rounded"
                                onClick={() =>
                                  handleIntake(dose.medicineId, dose.scheduledTime, "taken")
                                }
                              >
                                Taken
                              </button>
                              <button
                                className="bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded"
                                onClick={() =>
                                  handleIntake(dose.medicineId, dose.scheduledTime, "missed")
                                }
                              >
                                Not Taken
                              </button>
                            </>
                          ) : (
                            <span className="ml-4 font-semibold capitalize">
                              {doseStatus === "taken"
                                ? "Taken"
                                : doseStatus === "late"
                                ? "Taken Late"
                                : "Missed"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>



            {/* Right: Progress  */}



            <div className="flex-1 flex flex-col items-center">
              <h4 className="text-lg font-semibold text-yellow-200 mb-6">
                Daily Progress
              </h4>
              <div className="w-full max-w-xs bg-[#18181b] rounded-xl p-6 shadow-lg border border-yellow-400/30 mb-4">
                <div className="mb-2 text-gray-200 text-sm">
                  <div>
                    Total doses:{" "}
                    <span className="font-bold text-yellow-400">{total}</span>
                  </div>
                  <div>
                    Taken on time:{" "}
                    <span className="font-bold text-green-400">{onTime}</span>
                  </div>
                  <div>
                    Taken late:{" "}
                    <span className="font-bold text-yellow-400">{late}</span>
                  </div>
                  <div>
                    Missed:{" "}
                    <span className="font-bold text-red-400">{missed}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 h-4 rounded bg-gray-700 overflow-hidden shadow-inner flex">
                    <div className="h-4 bg-green-400" style={{ width: `${greenWidth}%` }} />
                    <div className="h-4 bg-yellow-400" style={{ width: `${yellowWidth}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


































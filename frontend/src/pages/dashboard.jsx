import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";
import AlchemyOrb from "../components/AlchemyOrb";

import { Menu, X } from "lucide-react";


import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 50 });
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsSidebarOpen(false); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);


  const { user } = useContext(AuthContext);


  const navigate = useNavigate();
  
   const handleAddMedicine = () => navigate("/medicine");
  const handleManageMedicine = () => navigate("/getUserHistory");
  



  return (
    <div className="flex h-screen bg-black text-gray-100 relative overflow-hidden">
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            onClick={closeSidebar}
            className="absolute inset-0 bg-black/50 transition-opacity"
          />
          <div
            className={`relative w-64 bg-black p-4 transform transition-transform duration-300 shadow-[0_0_15px_rgba(255,215,0,0.3)] ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            data-aos="fade-right"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-yellow-400">
               {user?.name || "Alchemist"}
              </span>
              <button
                onClick={closeSidebar}
                aria-label="Close sidebar"
                className="p-2 rounded-md hover:bg-gray-900 transition"
              >
                <X className="h-6 w-6 text-gray-200" />
              </button>
            </div>
            <Sidebar closeSidebar={closeSidebar} />
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-black">
          <button
            onClick={openSidebar}
            className="p-2 rounded-md hover:bg-gray-900 transition"
            aria-label="Open sidebar"
          >
            <Menu className="h-6 w-6 text-yellow-400" />
          </button>
          <Topbar />
        </div>

        <main data-aos="fade-down" className="p-8 flex-1 overflow-y-auto min-h-screen">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-3xl font-bold text-yellow-400">
             Welcome back, {user?.name || "Alchemist"} ✨
            </h2>

            <div className="flex gap-3">
              <button 
                onClick={handleAddMedicine}
                className="bg-yellow-500 hover:bg-yellow-400 transition text-black font-medium py-2 px-4 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.3)]">
                + Add Medicine
              </button>
              <button
               onClick={handleManageMedicine}
                className="bg-gray-800 hover:bg-gray-700 transition text-gray-200 font-medium py-2 px-4 rounded-lg">
                Manage Medicine
              </button>
            </div>
          </div>

          <DashboardCards />
        </main>
      </div>

      <div className="z-30" data-aos="zoom-in">
        <AlchemyOrb />
      </div>
    </div>
  );
}
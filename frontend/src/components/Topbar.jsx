import { Bell } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Topbar() {

      const { user } = useContext(AuthContext);
    
  return (
    <header
      className="h-16 bg-black border-b border-gray-800 flex items-center justify-between px-6 shadow-sm"
      data-aos="fade-down"
      data-aos-duration="1200"
    >
      {/* Page Title */}
      {/* <h3 className="text-lg font-semibold text-gray-100">Dashboard</h3> */}

      {/* Right Section */}
     <div className="flex items-center gap-6"> 
        {/* Notifications */}
        {/* <button className="relative text-gray-300 hover:text-yellow-400 transition">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></span>
        </button> */}

        {/* User Info */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-gray-700"
          />
          <span className="text-sm text-gray-200">  {user?.name || "Alchemist"} </span>
        </div>
      </div>
    </header>
  );
}
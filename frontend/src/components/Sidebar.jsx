import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Bell, Activity, Settings } from "lucide-react";
import { AuthContext } from "../contexts/AuthContext";

export default function Sidebar({ closeSidebar }) {
  const location = useLocation();
    const { user } = useContext(AuthContext);

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { to: "/reminders", label: "Reminders", icon: <Bell size={20} /> },
    { to: "/wellness", label: "Wellness", icon: <Activity size={20} /> },
    { to: "/settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="flex flex-col h-full bg-black text-gray-300 shadow-xl rounded-tr-2xl rounded-br-2xl overflow-hidden">
      {/* Logo / Header */}
      <div className="px-6 py-6 border-b border-gray-800 flex items-center justify-center">
        <h2 className="text-xl font-bold text-yellow-400 tracking-wide">
           {user?.name || "Alchemist"}
        </h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col mt-6 px-2 gap-2">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeSidebar}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-400 text-black shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                  : "hover:bg-gray-800 hover:text-yellow-400 hover:shadow-[0_0_8px_rgba(255,215,0,0.3)]"
              }`}
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Optional Footer */}
      {/* <div className="mt-auto px-6 py-4 border-t border-gray-800 text-gray-500 text-sm text-center">
        &copy; 2025 Alchemist Labs
      </div> */}
    </aside>
  );
}
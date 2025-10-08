

import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import httpStatus from "http-status";

export const AuthContext = createContext({});

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [alertedDoses, setAlertedDoses] = useState(() => {
    try {
      const saved = localStorage.getItem("alertedDoses");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  
  const addAlertedDose = useCallback((doseKey) => {
    setAlertedDoses((prev) => {
      if (prev.has(doseKey)) return prev; // already alerted
      const updated = new Set(prev);
      updated.add(doseKey);
      localStorage.setItem("alertedDoses", JSON.stringify(Array.from(updated)));
      return updated;
    });
  }, []);

  


  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("alertedDoses");
      setAlertedDoses(new Set());
    }
  }, [user]);




  // --- REGISTER ---




  const register = async (name, email, password) => {
    try {
      const res = await api.post("/register", { name, email, password });
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user || { name, email });
        navigate("/login");
      }
    } catch (err) {
      console.error("Register failed:", err);
      throw err;
    }
  };

  const login = async (email, password) => {
    try {
      const res = await api.post("/login", { email, password });
      if (res.status === httpStatus.OK) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user || null);
        navigate("/home");
      }
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };

  const medicine = async (userId, name, frequencyPerDay, times, startDate, endDate) => {
    try {
      const token = localStorage.getItem("token");
      frequencyPerDay = Number(frequencyPerDay);
      times = Array.isArray(times) ? times.map(String).filter(Boolean) : [];
      const res = await api.post(
        "/medicine",
        { userId, name, frequencyPerDay, times, startDate, endDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status === 200 || res.status === 201) {
        navigate("/dashboard");
        return res.data;
      } else {
        throw new Error("Failed to add medicine");
      }
    } catch (err) {
      console.error("Medicine function failed:", err);
      throw err;
    }
  };

  const getHistoryOfUser = async () => {
    try {
      const res = await api.get("/getUserHistory", {
        params: { token: localStorage.getItem("token") },
      });
      if (res.status === 200 || res.status === 201) return res.data;
      throw new Error("Failed to fetch user history");
    } catch (err) {
      console.error("Get history failed:", err);
      throw err;
    }
  };

  const updateMedicine = async (id, data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.put(`/medicine/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (err) {
      console.error("Update medicine failed:", err);
      throw err;
    }
  };

  const deleteMedicine = async (_id, userId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.delete(`/medicine/${_id}?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (err) {
      console.error("Delete medicine failed:", err);
      throw err;
    }
  };

  const trackIntake = async (medicineId, scheduledTime, status) => {
    try {
      const token = localStorage.getItem("token");
      const actualTime = new Date().toISOString();
      await api.post(
        "/medicine/track",
        { medicineId, scheduledTime, actualTime, status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error("Track intake failed:", err);
      throw err;
    }
  };

  const getNotifications = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/notifications", { params: { token } });
      if (res.status === 200 || res.status === 201) return res.data;
      throw new Error("Failed to fetch notifications");
    } catch (err) {
      console.error("Notifications fetch failed:", err);
      throw err;
    }
  };

  const deleteNotification = async (notifId) => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.delete(`/notifications/${notifId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (err) {
      console.error("Delete notification failed:", err);
      throw err;
    }
  };

  // --- BACKGROUND NOTIFICATIONS ---


  useEffect(() => {
    // if (!user) return;

    // let isRunning = false;
    // let intervalId;

    // const notifyUpcomingMedicines = async () => {
    //   if (isRunning) return; // prevent overlapping fetches
    //   isRunning = true;
    //   try {
    //     const token = localStorage.getItem("token");
    //     if (!token) return;

    //     const res = await api.get(`/medicine/upcoming?token=${token}`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     });

    //     if (res.status === 200 && Array.isArray(res.data)) {
    //       res.data.forEach((med) => {
    //         const doseKey = `${med.medicineId || med._id}_${new Date(
    //           med.scheduledTime
    //         ).getTime()}`;

    //         if (!alertedDoses.has(doseKey)) {
    //           addAlertedDose(doseKey);
    //           alert(
    //             `Upcoming Medicine: ${med.name} at ${new Date(
    //               med.scheduledTime
    //             ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    //           );
    //         }
    //       });
    //     }
    //   } catch (err) {
    //     console.error("Failed to fetch upcoming medicines:", err);
    //   } finally {
    //     isRunning = false;
    //   }
    // };

    // const checkNewNotifications = async () => {
    //   try {
    //     const notifications = await getNotifications();
    //     notifications.forEach((notif) => {
    //       alert(`Notification: ${notif.title} - ${notif.message}`);
    //     });
    //   } catch {
    //     /* silent fail */
    //   }
    // };

    // // Start once immediately, then repeat every minute
    // notifyUpcomingMedicines();
    // checkNewNotifications();
    // intervalId = setInterval(() => {
    //   notifyUpcomingMedicines();
    //   checkNewNotifications();
    // }, 60000);

    // return () => clearInterval(intervalId);
 // }, [user, alertedDoses, addAlertedDose]);
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        register,
        login,
        medicine,
        getHistoryOfUser,
        updateMedicine,
        deleteMedicine,
        trackIntake,
        getNotifications,
        deleteNotification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

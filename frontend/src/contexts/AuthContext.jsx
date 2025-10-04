import { createContext, useState, useEffect } from "react";
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

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const register = async (name, email, password) => {
    try {
      const res = await api.post("/register", { name, email, password });
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user || { name, email });
        navigate("/home");
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

  const medicine = async (userId, name, dosage, frequency, time, startDate, endDate) => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.post(
        "/medicine",
        { userId, name, dosage, frequency, time, startDate, endDate },
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
      let request = await api.get("/getUserHistory", {
        params: {
          token: localStorage.getItem("token"),
        },
      });
      if (request.status === 200 || request.status === 201) {
        return request.data;
      } else {
        throw new Error("Failed to fetch user history");
      }
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


  // const updateMedicine = async (id, data) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await api.put(`/medicine/${id}`, data, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     return res.data;
  //   } catch (err) {
  //     console.error("Update medicine failed:", err);
  //     throw err;
  //   }
  // };

  // const deleteMedicine = async (id) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const res = await api.delete(`/medicine/${id}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     return res.data;
  //   } catch (err) {
  //     console.error("Delete medicine failed:", err);
  //     throw err;
  //   }
  // };


  const deleteMedicine = async (id, userId) => {
  try {
    const token = localStorage.getItem("token");
    // append userId as query param
    const res = await api.delete(`/medicine/${id}?userId=${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    console.error("Delete medicine failed:", err);
    throw err;
  }
};


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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

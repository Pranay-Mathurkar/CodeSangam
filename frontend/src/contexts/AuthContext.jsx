

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import httpStatus from "http-status";

// Create a context
export const AuthContext = createContext({});

// Axios client for API requests
const api = axios.create({
  baseURL: "http://localhost:3000",
});





// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate();

  // Register function
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


  // Login function
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



  // Medicine function

  const medicine = async (userId, name, dosage, frequency, time, startDate, endDate) => {
  try {
    const token = localStorage.getItem('token');
    const res = await api.post(
      "/medicine",
      { userId, name, dosage, frequency, time, startDate, endDate },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (res.status === 200 || res.status === 201) {
      navigate('/user');
      return res.data;
    } else {
      throw new Error('Failed to add medicine');
    }
  } catch (err) {
    console.error("Medicine function failed:", err);
    throw err;
  }
};


// get user history function





const getHistoryOfUser = async () => {
  try {
    let request = await api.get("/getUserHistory", {
      params: {
        token: localStorage.getItem("token")
      }
    });
    if (request.status === 200 || request.status === 201) {
      navigate('/user');
      return request.data;
    }
  } catch (err) {
    throw err;
  }
};




  return (
    <AuthContext.Provider value={{ user, setUser, register, login ,medicine,getHistoryOfUser}}>
      {children}
    </AuthContext.Provider>
  );
};

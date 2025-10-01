// import axios from "axios";
// import httpStatus from "http-status";
// import { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";





// export const AuthContext = createContext({});

// const client = axios.create({
//     baseURL: "http://localhost:3000",
// })


// export const AuthProvider = ({ children }) => {

//     const authContext = useContext(AuthContext);


//     const [userData, setUserData] = useState(authContext);


//     const router = useNavigate();




//     const handleRegister = async (name, email, password) => {
//         try {
//             let request = await client.post("/register", {
//                 name: name,
//                 email: email,
//                 password: password
//             })


//             if (request.status === httpStatus.OK) {
//                 localStorage.setItem("token", request.data.token);
//                 router("/home")
//             }
//         } catch (err) {
//             throw err;
//         }
//     }

//     const handleLogin = async (email, password) => {
//         try {
//             let request = await client.post("/login", {
//                 email: email,
//                 password: password
//             });

//             console.log(email, password)
//             console.log(request.data)

//             if (request.status === httpStatus.OK) {
//                 localStorage.setItem("token", request.data.token);
//                 router("/home")
//             }
//         } catch (err) {
//             throw err;
//         }
//     }

  
//     const data = {
//         userData, setUserData,handleRegister, handleLogin
//     }

//     return (
//         <AuthContext.Provider value={data}>
//             {children}
//         </AuthContext.Provider>
//     )

// }











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
  const [user, setUser] = useState(null); // store logged-in user info
  const navigate = useNavigate();

  // Register function
  const register = async (name, email, password) => {
    try {
      const res = await api.post("/register", { name, email, password });
      if (res.status === 200 || res.status === 201) {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user || null);
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
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

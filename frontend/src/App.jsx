
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Register from "../src/pages/register";
import Login from "../src/pages/login";
import Home from "../src/pages/home";

export default function App() {



  return (




    <BrowserRouter>
      <AuthProvider>  


        <Routes>



          <Route path="/register" element={<Register />} />


          <Route path="/login" element={<Login />} />


          <Route path="/home" element={<Home />} />
        </Routes>

      </AuthProvider>
      
    </BrowserRouter>
  );
}

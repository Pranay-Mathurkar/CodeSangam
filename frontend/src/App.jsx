
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";


import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";
import Support from "./pages/support";
import Contact from "./pages/contact";
import About from "./pages/about";
import Documentation from "./pages/documentation";
import User from "./pages/user";



export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        

          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

         


          <Route path="/home" element={<Home />} />
            <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/user" element={<User />} />



         
        </Routes>
      </AuthProvider>
    </Router>
  );
}


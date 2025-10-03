






import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Page Imports
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Default route redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Auth routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Protected / main route */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}





import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import { AuthContext } from "../contexts/AuthContext";

const Header = () => {
  const { user, setUser } = useContext(AuthContext); // use AuthContext


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Protected route handler



  const handleProtectedNav = (event, path) => {
    if (!user) {
      event.preventDefault();
      navigate("/login");
    }
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setUser(null); 
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative">
      {/* Logo */}
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-light cursor-pointer"
        onClick={() => navigate("/home")}
      >
        Alchemist Grimoire
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        <Link
          to="/user"
          onClick={(e) => handleProtectedNav(e, "/user")}
          className="hover:text-gray-400 transition-colors duration-300"
        >
          My Account
        </Link>

        <Link to="/about" className="hover:text-gray-400 transition-colors duration-300">
          About Us
        </Link>

        <Link to="/contact" className="hover:text-gray-400 transition-colors duration-300">
          Contact
        </Link>

        <Link to="/support" className="hover:text-gray-400 transition-colors duration-300">
          Support
        </Link>
      </nav>

      {/* Auth Buttons (Desktop) */}
      {!user ? (
        <button
          onClick={handleSignIn}
          className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full
            font-medium transition-all duration-500 hover:bg-white hover:text-black"
        >
          SIGN IN
        </button>
      ) : (
        <button
          onClick={handleLogout}
          className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full
            font-medium transition-all duration-500 hover:bg-white hover:text-black"
        >
          LOGOUT
        </button>
      )}


      

      {/* Mobile Menu Toggle */}



      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 hover:text-gray-400 transition-colors"
        aria-label="Toggle menu"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white z-40 transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Header Row */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
          <h2 className="text-xl font-light">Menu</h2>
          <button
            onClick={toggleMobileMenu}
            className="text-3xl hover:text-gray-400 transition-colors"
          >
            <i className="bx bx-x"></i>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-6 px-6 mt-6">
          <Link
            to="/user"
            onClick={(e) => handleProtectedNav(e, "/user")}
            className="hover:text-gray-400 transition-colors"
          >
            My Account
          </Link>

          <Link to="/about" className="hover:text-gray-400 transition-colors">
            About Us
          </Link>

          <Link to="/contact" className="hover:text-gray-400 transition-colors">
            Contact
          </Link>

          <Link to="/support" className="hover:text-gray-400 transition-colors">
            Support
          </Link>

          {/* Mobile Auth Button */}
          {!user ? (
            <button
              onClick={handleSignIn}
              className="w-full mt-4 bg-[#a7a7a7] text-black py-3 rounded-full
                font-medium transition-all duration-500 hover:bg-white hover:text-black"
            >
              SIGN IN
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full mt-4 bg-[#a7a7a7] text-black py-3 rounded-full
                font-medium transition-all duration-500 hover:bg-white hover:text-black"
            >
              LOGOUT
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

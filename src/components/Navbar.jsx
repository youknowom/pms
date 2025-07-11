import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../assets/logo.svg"; // ✅ direct import instead of assets.logo

const Navbar = () => {
  const [user, setUser] = useState(null); // initially no user
  const [isOwner, setIsOwner] = useState(false); // not used now
  const [showLogin, setShowLogin] = useState(false); // for Login toggle

  const logout = () => {
    setUser(null);
    toast.success("Logged out successfully!");
  };

  const changeRole = async () => {
    // this function is optional now, can be removed if unused
    setIsOwner(true);
    toast.success("Role changed to owner!");
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-10 py-4 text-gray-500 border-b border-borderColor relative transition-all">
      <Link to="/admin">
        <img src={logo} alt="Logo" className="h-7" />
      </Link>

      <p>Welcome, {user?.name || "Admin"}</p>

      <button
        onClick={() => {
          user ? logout() : setShowLogin(true);
        }}
        className="text-sm px-4 py-2 rounded bg-primary text-white hover:bg-blue-800 transition"
      >
        {user ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { dummyUserData } from "../assets/assets";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Gauge,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react";

const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <Gauge size={18} />,
  },
  {
    name: "Add Employees",
    path: "/admin/add-employees",
    icon: <UserPlus size={18} />,
  },
  {
    name: "Manage Employees",
    path: "/admin/manage-employees",
    icon: <Users size={18} />,
  },
  {
    name: "Pay Out",
    path: "/admin/pay-out",
    icon: <Wallet size={18} />,
  },
];

const Sidebar = () => {
  const user = dummyUserData;
  const location = useLocation();
  const [image, setImage] = useState("");
  const [userImage, setUserImage] = useState(user?.image || "");
  const [isOpen, setIsOpen] = useState(true);

  const updateImage = () => {
    const newImageURL = URL.createObjectURL(image);
    setUserImage(newImageURL);
    setImage("");
  };

  return (
    <motion.div
      animate={{ width: isOpen ? 220 : 70 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="relative min-h-screen flex flex-col pt-6 border-r border-borderColor bg-white"
    >
      {/* Toggle button */}
      <button
        className="absolute top-3 -right-4 bg-white border rounded-full p-1 shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>

      {/* Profile image */}
      <div className="group relative mx-auto">
        <label htmlFor="image">
          <img
            className={`rounded-full object-cover ${
              isOpen ? "w-14 h-14" : "w-9 h-9"
            }`}
            src={
              image
                ? URL.createObjectURL(image)
                : userImage ||
                  "https://creatorspace.imgix.net/users/clrvzk60j02w4qt01696sgjtr/0mKp9xFKbvrGQJ2Y-418787584_752106519697462_6896083793320903255_n.jpg"
            }
            alt="Profile"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>
      </div>

      {/* Save button */}
      {image && isOpen && (
        <button
          className="mx-auto mt-2 bg-primary/10 text-primary text-xs px-3 py-1 rounded-full flex items-center gap-1"
          onClick={updateImage}
        >
          Save
        </button>
      )}

      {/* Username */}
      {isOpen && <p className="mt-3 text-center text-sm">{user?.name}</p>}

      {/* Sidebar Links */}
      <div className="mt-6 flex flex-col gap-2 w-full">
        {ownerMenuLinks.map((link, index) => {
          const isActive = link.path === location.pathname;
          return (
            <NavLink
              key={index}
              to={link.path}
              className={`relative flex items-center gap-3 py-2 pl-4 pr-2 hover:bg-gray-100 transition-all duration-200 ${
                isActive ? "bg-primary/10 text-primary" : "text-gray-600"
              }`}
            >
              <span>{link.icon}</span>
              {isOpen && <span>{link.name}</span>}
              {isActive && (
                <div className="absolute right-0 w-1.5 h-6 bg-primary rounded-l" />
              )}
            </NavLink>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sidebar;

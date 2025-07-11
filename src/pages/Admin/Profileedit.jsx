import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Profileedit = () => {
  return (
    <Link to="/admin/profile-edit">
      <img src={logo} alt="Logo" className="h-7" />
    </Link>
  );
};

export default Profileedit;

import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

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
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/" className="nav-link">
                Pricing
              </Link>
              <Link to="/" className="nav-link">
                FAQ
              </Link>
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <FaBars />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

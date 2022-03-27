import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#ffffff" }} />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
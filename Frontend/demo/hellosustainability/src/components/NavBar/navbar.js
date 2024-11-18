import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Hello, Sustainability" className="logo-img" />
        </Link>
      </div>
      <ul className={`links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="toggle_btn" onClick={handleToggle}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;

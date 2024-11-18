import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
          <img src="/hello Sustainability.png" alt="Hello, Sustainability" className="logo-img" />
        </a>
      </div>
      <ul className="links">
        <li>
          <a href="/Frontend/App.js">Home</a>
        </li>
        <li>
          <a href="/Frontend/about.js">About</a>
        </li>
        <li>
          <a href="/contact/contact.js">Contact</a>
        </li>
      </ul>
      <a href="/login/login.html" className="action_btn">
        Get Started
      </a>
      <div className="toggle_btn">
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/" className="navLogo">
        I'm A Logo
      </Link>
      <div className="navMenu">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/epic" className="navLink">
          Epic
        </Link>
        <Link to="/marsRover" className="navLink">
          Mars Rover
        </Link>
        <Link to="/about" className="navLink">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

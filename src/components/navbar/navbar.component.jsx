import React from "react";
import { Link } from "react-router-dom";
import { UserDarkMode } from "../themeContext/userDarkMode";
import Toggle from "../themeContext/Toggler";
import { lightTheme, darkTheme } from "../themeContext/Themes";

import "./navbar.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../themeContext/GlobalStyles";
import { PacmanLoader } from "react-spinners";

const Navbar = () => {
  const [theme, themeToggler, mountedComponent] = UserDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <div className="nav">
        <Link to="/" className="navLogo">
          <PacmanLoader color="#085eda" />
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
          <Link to="/VideoImageLibrary" className="navLink">
            Nasa's Image and Video Library
          </Link>
          <Link to="/exoplanetarchive" className="navLink">
            Exoplanetarchive
          </Link>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;

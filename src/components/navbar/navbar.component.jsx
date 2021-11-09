import React from "react";
import { Link } from "react-router-dom";
import { UserDarkMode } from "../themeContext/userDarkMode";
import Toggle from "../themeContext/Toggler";
import { lightTheme, darkTheme } from "../themeContext/Themes";

import "./navbar.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../themeContext/GlobalStyles";

const Navbar = () => {
  const [theme, themeToggler, mountedComponent] = UserDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
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
          <Link to="/about" className="navLink">
            About
          </Link>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { SiNumpy } from "react-icons/si";
import "../Header/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-app-name">
        <h1>
          <SiNumpy className="logo" /> umber Discovery
        </h1>
      </div>
      <div className="header-navbar">
        <NavLink className="navbar-button" to="/game-page">
          Go to the game
        </NavLink>
      </div>
    </div>
  );
}

export default Header;

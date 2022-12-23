import React from "react";
import { NavLink } from "react-router-dom";

function WelcomePage() {
  return (
    <div>
      <NavLink to="game-page">Game</NavLink>
    </div>
  );
}

export default WelcomePage;

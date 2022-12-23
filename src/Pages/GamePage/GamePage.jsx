import React from "react";

function GamePage() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div className="results"></div>
      <div className="game-controller"></div>
      <div className="game-navbar"></div>
    </div>
  );
}

export default GamePage;

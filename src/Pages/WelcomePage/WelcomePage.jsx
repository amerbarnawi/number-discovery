import React from "react";
import { NavLink } from "react-router-dom";
import { gameData } from "../../gameData/gameData.js";
import "../WelcomePage/WelcomePage.css";

function WelcomePage() {
  return (
    <>
      <div className="welcome-page-info">
        <div className="game-info block">
          <h3>{gameData.gameInfo.title}</h3>
          <p>{gameData.gameInfo.description}</p>
        </div>
        <div className="principle block">
          <h3>{gameData.principle.title}</h3>
          <p>{gameData.principle.description}</p>
        </div>
        <div className="guide block">
          <h3>{gameData.guide.title}</h3>
          <ol>
            {gameData.guide.description.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="rules block">
          <h3>{gameData.rules.title}</h3>
          <ul>
            {gameData.rules.description.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        <div className="evaluation block">
          <h3>{gameData.evaluation.title}</h3>
          <ul>
            {gameData.evaluation.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="example block">
          <h3>{gameData.example.title}</h3>
          <p>{gameData.example.description}</p>
        </div>
        <p className="programmer-name">
          This game is developed by: Amer Barnawi
        </p>
        <NavLink to="game-page">Game</NavLink>
      </div>
    </>
  );
}

export default WelcomePage;

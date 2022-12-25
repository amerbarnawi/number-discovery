import React from "react";
import { RiRestartFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { NavLink } from "react-router-dom";
import "../GameNavbar/GameNavbar.css";
import InfoMessage from "../InfoMessage/InfoMessage";
import ImportantCards from "../../ImportantCards/ImportantCards";

function GameNavbar({
  setIsRestart,
  message,
  importantCards,
  setImportantCards,
}) {
  const restartGame = () => {
    setIsRestart(true);
  };

  return (
    <div className="navbar-box">
      <div className="navbar-buttons">
        <NavLink to="/" className="link">
          <div className="navbar-button">
            <ImHome className="navbar-icon" />
            <p>Home</p>
          </div>
        </NavLink>

        <div className="navbar-button" onClick={() => restartGame()}>
          <RiRestartFill className="navbar-icon" />
          <p>Restart</p>
        </div>
      </div>
      <InfoMessage message={message} />
      <div>
        <ImportantCards
          importantCards={importantCards}
          setImportantCards={setImportantCards}
        />
      </div>
    </div>
  );
}

export default GameNavbar;

import React, { useEffect } from "react";
import { RiRestartFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { SiGoogleanalytics } from "react-icons/si";
import "../GameNavbar/GameNavbar.css";
import InfoMessage from "../InfoMessage/InfoMessage";
import ImportantCards from "../ImportantCards/ImportantCards";
import { useGlobalVariables } from "../../Context/GlobalVariables";
import Report from "../Report/Report";

function GameNavbar({
  setIsRestart,
  message,
  setMessage,
  setIsPopupTrigger,
  setISHomePage,
}) {
  const { isReport, setIsReport, isWon } = useGlobalVariables();

  useEffect(() => {
    if (message.status === "error") {
      const timeOut = setTimeout(() => {
        setMessage({ status: "message", text: "Keep going .." });
      }, 3000);
      return () => clearInterval(timeOut);
    }
  }, [message]);

  return (
    <div className="navbar-box">
      <div className="navbar-buttons">
        <div
          className="navbar-button"
          onClick={() => {
            setIsPopupTrigger({ status: true, homepage: true });
          }}
        >
          <ImHome className="navbar-icon" />
          <p>Home</p>
        </div>

        <div
          className="navbar-button"
          onClick={() => setIsPopupTrigger({ status: true, restart: true })}
        >
          <RiRestartFill className="navbar-icon" />
          <p>Restart</p>
        </div>
        <div className="navbar-button" onClick={() => setIsReport(!isReport)}>
          <SiGoogleanalytics className="navbar-icon" />
          <p>Report</p>
        </div>
      </div>
      {isReport && message.status !== "error" && !isWon ? (
        <Report />
      ) : (
        <InfoMessage message={message} />
      )}
      <ImportantCards />
    </div>
  );
}

export default GameNavbar;

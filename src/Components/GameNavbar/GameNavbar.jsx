import React, { useEffect } from "react";
import { RiRestartFill } from "react-icons/ri";
import { ImHome } from "react-icons/im";
import { SiGoogleanalytics } from "react-icons/si";
import { MdDescription } from "react-icons/md";
import "../GameNavbar/GameNavbar.css";
import InfoMessage from "../InfoMessage/InfoMessage";
import ImportantCards from "../ImportantCards/ImportantCards";
import { useGlobalVariables } from "../../Context/GlobalVariables";
import Report from "../Report/Report";

function GameNavbar({
  message,
  setMessage,
  setIsPopupTrigger,
  comparingResult,
}) {
  const { isReport, setIsReport, isWon, isDescription, setIsDescription } =
    useGlobalVariables();

  useEffect(() => {
    if (message.status === "error") {
      const timeOut = setTimeout(() => {
        setMessage({ status: "message", text: "Keep going .." });
      }, 3000);
      return () => clearInterval(timeOut);
    }
  }, [message, setMessage]);

  const handleDescription = () => {
    if (!isDescription) {
      setMessage({ status: "message", text: "The timer has been paused!" });
    } else {
      setMessage({ status: "message", text: "Keep going .." });
    }
    setIsDescription(!isDescription);
  };

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
        <div className="navbar-button" onClick={() => handleDescription()}>
          <MdDescription className="navbar-icon" />
          <p>Description</p>
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
        <Report comparingResult={comparingResult} />
      ) : (
        <InfoMessage message={message} />
      )}
      {isReport ? "" : <ImportantCards />}
    </div>
  );
}

export default GameNavbar;

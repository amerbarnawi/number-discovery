import React from "react";
import "../RestartPopup/RestartPopup.css";

function RestartPopup({ setIsPopupTrigger, setIsRestart }) {
  return (
    <div>
      <p>Are you sure you want to restart the game?</p>
      <button
        className="popup-button"
        onClick={() => {
          setIsRestart(true);
          setIsPopupTrigger({ status: false });
        }}
      >
        Restart
      </button>
      <button
        className="popup-button"
        onClick={() => setIsPopupTrigger({ status: false })}
      >
        Cancel
      </button>
    </div>
  );
}

export default RestartPopup;

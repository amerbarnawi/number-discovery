import React from "react";

function HomePagePopup({ setIsPopupTrigger, setIsNavigate }) {
  return (
    <div>
      <p>Are you sure you want to go to the home page?</p>
      <button
        className="popup-button"
        onClick={() => {
          setIsPopupTrigger({ status: false });
          setIsNavigate(true);
        }}
      >
        Home
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

export default HomePagePopup;

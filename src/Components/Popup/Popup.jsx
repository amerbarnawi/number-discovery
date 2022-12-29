import React from "react";
import { MdClose } from "react-icons/md";
import "../Popup/Popup.css";

function Popup(props) {
  return props.isTrigger.status ? (
    <div className="popup-external">
      <div className="popup-internal">
        <MdClose
          className="close-icon"
          onClick={() => props.setIsPopupTrigger({ status: false })}
        />
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;

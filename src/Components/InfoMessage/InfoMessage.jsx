import React from "react";
import "../InfoMessage/InfoMessage.css";
import { MdOutlineError } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

function InfoMessage({ message }) {
  return (
    <div className="info-message">
      <div>
        {message.status === "error" ? <MdOutlineError /> : <TiMessages />}
      </div>
      <h3>{message.status === "error" ? <p>error</p> : <p>Message</p>}</h3>
      <p>{message.text}</p>
    </div>
  );
}

export default InfoMessage;

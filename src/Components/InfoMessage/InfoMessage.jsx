import React from "react";
import "../InfoMessage/InfoMessage.css";
import { MdOutlineError } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

function InfoMessage({ message }) {
  return (
    <div
      className={
        message.status === "error"
          ? "info-message info-message-error"
          : "info-message"
      }
    >
      <h3>{message.status === "error" ? <p>Note</p> : <p>Message</p>}</h3>
      <p>{message.text}</p>
    </div>
  );
}

export default InfoMessage;

import React from "react";
import "../UserNumInputs/UserNumInputs.css";

function UserNumInputs({ userNumber, setNumbers, inputRef }) {
  return (
    <div className="user-number-inputs">
      <input
        type="number"
        ref={inputRef.firstInputRef}
        value={userNumber.firstNum}
        onChange={(e) => {
          setNumbers(e.target.value);
        }}
      />
      <input
        type="number"
        ref={inputRef.secondInputRef}
        value={userNumber.secondNum}
        onChange={(e) => {
          setNumbers(e.target.value);
        }}
      />
      <input
        type="number"
        ref={inputRef.thirdInputRef}
        value={userNumber.thirdNum}
        onChange={(e) => {
          setNumbers(e.target.value);
        }}
      />
      <input
        type="number"
        ref={inputRef.fourthInputRef}
        value={userNumber.fourthNum}
        onChange={(e) => {
          setNumbers(e.target.value);
        }}
      />
    </div>
  );
}

export default UserNumInputs;

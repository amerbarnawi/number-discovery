import React from "react";
import "../NumbersButtons/NumberButtons.css";

function NumberButtons({
  setNumbers,
  compareNumbers,
  restUserNumbers,
  isLost,
}) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <>
      {isLost ? (
        "Sorry, you lost the game!"
      ) : (
        <div className="numbers-buttons">
          {numbers.map((button, index) => (
            <button key={index} onClick={(e) => setNumbers(e.target.innerText)}>
              {button}
            </button>
          ))}
          <button onClick={() => compareNumbers()}>Compare</button>
          <button onClick={() => restUserNumbers()}>Reset</button>
        </div>
      )}
    </>
  );
}

export default NumberButtons;

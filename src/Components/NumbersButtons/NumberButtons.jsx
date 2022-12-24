import React from "react";

function NumberButtons({ setNumbers, restUserNumbers }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="numbers-buttons">
      {numbers.map((button, index) => (
        <button key={index} onClick={(e) => setNumbers(e.target.innerText)}>
          {button}
        </button>
      ))}
      <button onClick={() => restUserNumbers()}>Reset</button>
    </div>
  );
}

export default NumberButtons;

import React from "react";
import { BsPatchMinusFill, BsPatchPlusFill } from "react-icons/bs";
import "../ResultCard/ResultCard.css";
import { TfiSave } from "react-icons/tfi";
import { AiOutlineDelete } from "react-icons/ai";
import { useGlobalVariables } from "../../Context/GlobalVariables";

function ResultCard({ comparingResult, status }) {
  const { importantCards, setImportantCards } = useGlobalVariables();

  const filterImportantCards = (e) => {
    const clickedCardId = e.target.id;
    const newImportantCards = importantCards.filter(
      (card) => card.id !== clickedCardId
    );
    setImportantCards(newImportantCards);
  };

  const addCardToImportant = (e) => {
    const clickedCardId = e.target.id;
    const isCardFound = importantCards.find(
      (card) => card.id === clickedCardId
    );
    if (isCardFound) {
      return;
    }
    setImportantCards([comparingResult, ...importantCards]);
  };

  return (
    <div className="result-card">
      <div className="save-and-delete-icons">
        {status === "important" ? (
          <AiOutlineDelete
            className="delete-card-icon"
            id={comparingResult.id}
            onClick={(e) => filterImportantCards(e)}
          />
        ) : (
          <TfiSave
            className="save-card-icon"
            id={comparingResult.id}
            onClick={(e) => addCardToImportant(e)}
          />
        )}
      </div>
      <div>
        <p>Your number is: {comparingResult.userNumber.join("")}</p>
        <p>
          The result is:{" "}
          {comparingResult.result.map((sign, index) => {
            if (sign === "-") {
              return <BsPatchMinusFill className="result-icon" key={index} />;
            } else if (sign === "+") {
              return <BsPatchPlusFill className="result-icon" key={index} />;
            } else {
              return <span key={index}>{sign}</span>;
            }
          })}
        </p>
      </div>
    </div>
  );
}

export default ResultCard;

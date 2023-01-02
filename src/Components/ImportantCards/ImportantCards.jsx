import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import "../ImportantCards/ImportantCards.css";
import { useGlobalVariables } from "../../Context/GlobalVariables";
import { BsArrowDownCircle } from "react-icons/bs";

function ImportantCards() {
  const { importantCards } = useGlobalVariables();
  return (
    <div className="important-cards-container">
      {importantCards.length > 0 ? (
        importantCards.map((result, index) => (
          <ResultCard key={index} comparingResult={result} status="important" />
        ))
      ) : (
        <p className="important-cards-title">
          Your important cards <BsArrowDownCircle />
        </p>
      )}
    </div>
  );
}

export default ImportantCards;

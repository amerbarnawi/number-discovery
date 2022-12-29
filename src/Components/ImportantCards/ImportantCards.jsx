import React from "react";
import ResultCard from "../ResultCard/ResultCard";
import "../ImportantCards/ImportantCards.css";
import { useGlobalVariables } from "../../Context/GlobalVariables";

function ImportantCards() {
  const { importantCards } = useGlobalVariables();
  return (
    <div className="important-cards-container">
      {importantCards.map((result, index) => (
        <ResultCard key={index} comparingResult={result} status="important" />
      ))}
    </div>
  );
}

export default ImportantCards;

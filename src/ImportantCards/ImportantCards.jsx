import React from "react";
import ResultCard from "../Components/ResultCard/ResultCard";
import "../ImportantCards/ImportantCards.css";

function ImportantCards({ importantCards, setImportantCards }) {
  return (
    <div className="important-cards-container">
      {importantCards.map((result, index) => (
        <ResultCard
          key={index}
          comparingResult={result}
          status="important"
          importantCards={importantCards}
          setImportantCards={setImportantCards}
        />
      ))}
    </div>
  );
}

export default ImportantCards;

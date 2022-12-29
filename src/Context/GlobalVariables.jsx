import React, { useContext, createContext, useState } from "react";

export const GlobalVariables = createContext();

export function useGlobalVariables() {
  return useContext(GlobalVariables);
}

export function VariablesProvider({ children }) {
  const [importantCards, setImportantCards] = useState([]);
  const [star, setStar] = useState(0);
  const [brain, setBrain] = useState(10);
  const [time, setTime] = useState();
  const [isReport, setIsReport] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [endTime, setEndTime] = useState(0);

  return (
    <GlobalVariables.Provider
      value={{
        importantCards,
        setImportantCards,
        star,
        setStar,
        brain,
        setBrain,
        time,
        setTime,
        isReport,
        setIsReport,
        isWon,
        setIsWon,
        endTime,
        setEndTime,
      }}
    >
      {children}
    </GlobalVariables.Provider>
  );
}

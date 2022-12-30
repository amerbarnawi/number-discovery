import React, { useEffect, useRef, useState } from "react";
import GameNavbar from "../../Components/GameNavbar/GameNavbar";
import NumberButtons from "../../Components/NumbersButtons/NumberButtons";
import ResultCard from "../../Components/ResultCard/ResultCard";
import TimerAndEvaluation from "../../Components/TimerAndEvaluation/TimerAndEvaluation";
import UserNumInputs from "../../Components/UserNumInputs/UserNumInputs";
import "../GamePage/GamePage.css";
import { v4 as uuid } from "uuid";
import { useGlobalVariables } from "../../Context/GlobalVariables";
import FinalReport from "../../Components/FinalReport/FinalReport";
import { BsCardChecklist } from "react-icons/bs";
import Popup from "../../Components/Popup/Popup";
import RestartPopup from "../../Components/PopupComponents/RestartPopup/RestartPopup";
import HomePagePopup from "../../Components/PopupComponents/HomePagePopup/HomePagePopup";
import { Navigate } from "react-router-dom";

function GamePage() {
  const [isLost, setIsLost] = useState(false);
  const [computerNumbers, setComputerNumbers] = useState({});
  const [comparingResult, setComparingResult] = useState([]);
  const [message, setMessage] = useState({});
  const [isRestart, setIsRestart] = useState(true);
  const [isPopupTrigger, setIsPopupTrigger] = useState({ status: false });
  const [isNavigate, setIsNavigate] = useState(false);
  const [arrow, setArrow] = useState({
    brainUp: false,
    brainDown: false,
    starUp: false,
  });
  const [userNumber, setUserNumber] = useState({
    firstNum: "",
    secondNum: "",
    thirdNum: "",
    fourthNum: "",
  });

  const {
    importantCards,
    setImportantCards,
    star,
    setStar,
    brain,
    setBrain,
    isWon,
    setIsWon,
  } = useGlobalVariables();

  // ===============================================================
  // In case of restart
  const Restart = () => {
    setBrain(10);
    setStar(0);
    setComparingResult([]);
    restUserNumbers();
    setIsLost(false);
    setIsWon(false);
    setImportantCards([]);
    setArrow({
      brainUp: false,
      brainDown: false,
      starUp: false,
    });
  };

  useEffect(() => {
    if (isRestart) {
      Restart();
    }
  });

  // ===============================================================
  // In case the user lost the 10 brains then he/she lost.
  useEffect(() => {
    if (brain === 0) {
      setIsLost(true);
      setMessage({ status: "message", text: "You lost! try again!" });
    }
  }, [brain]);

  useEffect(() => {
    console.log(computerNumbers);
  }, [computerNumbers]);

  // ===============================================================
  // Generating computer random numbers.
  useEffect(() => {
    const random = () => Math.floor(Math.random() * 10);
    setComputerNumbers({
      firstNum: random(),
      secondNum: random(),
      thirdNum: random(),
      fourthNum: random(),
    });
    setIsRestart(false);
    setMessage({ status: "message", text: "Welcome, you can start!" });
  }, [isRestart]);

  // ===============================================================
  // Adding references to the inputs for focusing.
  const inputRef = {
    firstInputRef: useRef(null),
    secondInputRef: useRef(null),
    thirdInputRef: useRef(null),
    fourthInputRef: useRef(null),
  };

  const restUserNumbers = () => {
    setUserNumber({
      firstNum: "",
      secondNum: "",
      thirdNum: "",
      fourthNum: "",
    });
  };

  // ===============================================================
  // To create the user number.
  const setNumbers = (chosenNumber) => {
    if (userNumber.firstNum === "") {
      setUserNumber({ ...userNumber, firstNum: +chosenNumber });
      inputRef.secondInputRef.current.focus();
      return;
    }
    if (userNumber.secondNum === "") {
      setUserNumber({ ...userNumber, secondNum: +chosenNumber });
      inputRef.thirdInputRef.current.focus();
      return;
    }
    if (userNumber.thirdNum === "") {
      setUserNumber({ ...userNumber, thirdNum: +chosenNumber });
      inputRef.fourthInputRef.current.focus();
      return;
    }
    if (userNumber.fourthNum === "") {
      setUserNumber({ ...userNumber, fourthNum: +chosenNumber });
      inputRef.firstInputRef.current.focus();
      return;
    }
  };

  // ===============================================================
  const getBrainAndStarEvaluation = (userNumberArray, lastResult) => {
    // Cases of losing brain
    const isRepeated = comparingResult.find((item) => {
      return item.userNumber.join("") === userNumberArray.join("");
    });
    if (isRepeated) {
      setBrain(brain - 1);
      setArrow({ ...arrow, brainDown: true, brainUp: false });
      setMessage({ status: "error", text: "You tried this number before!" });
    }

    const isAllEqual = userNumberArray.every(
      (number) => number === userNumberArray[0]
    );
    if (isAllEqual) {
      setBrain(brain - 1);
      setArrow({ ...arrow, brainDown: true, brainUp: false });
    }
    // Cases of gaining brain
    const isFirstPositive = comparingResult.find(
      (item) => item.result.join("") === lastResult.join("")
    );
    const isPositive =
      lastResult.filter((sign) => sign === "+").length > 2 ? true : false;
    if (isPositive && !isRepeated) {
      setStar(star + 1);
      if (!isFirstPositive) {
        setBrain(brain + 1);
        setArrow({ starUp: true, brainUp: true, brainDown: false });
      }
    }
  };

  // ===============================================================
  // Chick if the user won
  const checkIfWon = (lastResult) => {
    const isUserWon =
      lastResult.filter((sign) => sign === "+").length > 3 ? true : false;
    if (isUserWon) {
      setIsWon(true);
      setMessage({ status: "message", text: "Congrats, you won!" });
    }
  };

  // ===============================================================
  // Comparing the computer number with the user number ( The game logic ).
  const compareNumbers = () => {
    if (
      userNumber.firstNum === "" ||
      userNumber.secondNum === "" ||
      userNumber.thirdNum === "" ||
      userNumber.fourthNum === ""
    ) {
      setMessage({ status: "error", text: "You forget some numbers!" });
      return;
    }

    const userNumberArray = [
      +userNumber.firstNum,
      +userNumber.secondNum,
      +userNumber.thirdNum,
      +userNumber.fourthNum,
    ];
    const userNumberCopy = [...userNumberArray];
    const computerNumbersArray = [
      +computerNumbers.firstNum,
      +computerNumbers.secondNum,
      +computerNumbers.thirdNum,
      +computerNumbers.fourthNum,
    ];

    const lastResult = [];
    const parallelComparison = (user, computer) => {
      user.forEach((number, userNumIndex) => {
        computer.forEach((computerNumber, computerNumIndex) => {
          if (number === computerNumber && userNumIndex === computerNumIndex) {
            lastResult.push("+");
            computer[computerNumIndex] = "*";
            user[userNumIndex] = "@";
          }
        });
      });
    };
    const crossComparison = (user, computer) => {
      user.forEach((number, userNumIndex) => {
        computer.forEach((computerNumber, computerNumIndex) => {
          if (number === computerNumber && userNumIndex !== computerNumIndex) {
            lastResult.push("-");
            computer[computerNumIndex] = "*";
            user[userNumIndex] = "@";
          }
        });
      });
    };

    parallelComparison(userNumberCopy, computerNumbersArray);
    crossComparison(userNumberCopy, computerNumbersArray);

    if (lastResult.length === 0) {
      lastResult.push("No numbers");
    }

    setComparingResult([
      { id: uuid(), userNumber: userNumberArray, result: lastResult },
      ...comparingResult,
    ]);
    restUserNumbers();
    getBrainAndStarEvaluation(userNumberArray, lastResult);
    checkIfWon(lastResult);
  };
  // ===============================================================
  return (
    <div className="game-layout">
      <div className="results">
        <p>
          <BsCardChecklist /> Attempts: {comparingResult.length}
        </p>
        {comparingResult.map((result, index) => (
          <ResultCard
            key={index}
            comparingResult={result}
            setImportantCards={setImportantCards}
            importantCards={importantCards}
          />
        ))}
      </div>

      <div className="game-controller">
        <div className={isWon ? "final-report" : "hidden"}>
          <FinalReport comparingResult={comparingResult} />
        </div>

        <div className={isWon ? "hidden" : "main-side"}>
          <TimerAndEvaluation
            isRestart={isRestart}
            setArrow={setArrow}
            arrow={arrow}
          />
          <UserNumInputs
            userNumber={userNumber}
            setNumbers={setNumbers}
            inputRef={inputRef}
          />
          <NumberButtons
            setNumbers={setNumbers}
            restUserNumbers={restUserNumbers}
            compareNumbers={compareNumbers}
            isLost={isLost}
            isWon={isWon}
          />
        </div>
      </div>
      <div className="game-navbar">
        <GameNavbar
          setIsRestart={setIsRestart}
          message={message}
          setMessage={setMessage}
          setIsPopupTrigger={setIsPopupTrigger}
        />
      </div>
      <Popup
        className="delete-popup"
        isTrigger={isPopupTrigger}
        setIsPopupTrigger={setIsPopupTrigger}
      >
        {isPopupTrigger["restart"] ? (
          <RestartPopup
            setIsPopupTrigger={setIsPopupTrigger}
            setIsRestart={setIsRestart}
          />
        ) : isPopupTrigger["homepage"] ? (
          <HomePagePopup
            setIsPopupTrigger={setIsPopupTrigger}
            setIsNavigate={setIsNavigate}
          />
        ) : (
          ""
        )}
      </Popup>
      {isNavigate ? <Navigate to="/" /> : ""}
    </div>
  );
}

export default GamePage;

import React, { useEffect, useRef, useState } from "react";
import GameNavbar from "../../Components/GameNavbar/GameNavbar";
import NumberButtons from "../../Components/NumbersButtons/NumberButtons";
import ResultCard from "../../Components/ResultCard/ResultCard";
import TimerAndEvaluation from "../../Components/TimerAndEvaluation/TimerAndEvaluation";
import UserNumInputs from "../../Components/UserNumInputs/UserNumInputs";
import "../GamePage/GamePage.css";
import { v4 as uuid } from "uuid";

function GamePage() {
  const [computerNumbers, setComputerNumbers] = useState({});
  const [comparingResult, setComparingResult] = useState([]);
  const [importantCards, setImportantCards] = useState([]);
  const [message, setMessage] = useState({});
  const [isRestart, setIsRestart] = useState(true);
  const [star, setStar] = useState(0);
  const [brain, setBrain] = useState(10);
  const [userNumber, setUserNumber] = useState({
    firstNum: "",
    secondNum: "",
    thirdNum: "",
    fourthNum: "",
  });

  useEffect(() => {
    console.log(computerNumbers);
  }, [computerNumbers]);

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

  useEffect(() => {
    if (message.status === "error") {
      const timeOut = setTimeout(() => {
        setMessage({ status: "message", text: "Keep going .." });
      }, 3000);
      return () => clearInterval(timeOut);
    }
  }, [message]);

  // In case of restart
  useEffect(() => {
    setBrain(10);
    setStar(0);
    setComparingResult([]);
    restUserNumbers();
  }, [isRestart]);

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
    setComparingResult([...comparingResult, lastResult]);
    setComparingResult([
      { id: uuid(), userNumber: userNumberArray, result: lastResult },
      ...comparingResult,
    ]);
    restUserNumbers();
  };

  return (
    <div className="game-layout">
      <div className="results">
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
        <TimerAndEvaluation brain={brain} star={star} isRestart={isRestart} />
        <UserNumInputs
          userNumber={userNumber}
          setUserNumber={setUserNumber}
          setNumbers={setNumbers}
          inputRef={inputRef}
        />
        <NumberButtons
          userNumber={userNumber}
          setUserNumber={setUserNumber}
          setNumbers={setNumbers}
          restUserNumbers={restUserNumbers}
          compareNumbers={compareNumbers}
        />
      </div>
      <div className="game-navbar">
        <GameNavbar
          setIsRestart={setIsRestart}
          message={message}
          importantCards={importantCards}
          setImportantCards={setImportantCards}
        />
      </div>
    </div>
  );
}

export default GamePage;

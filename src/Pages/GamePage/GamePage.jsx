import React, { useEffect, useRef, useState } from "react";
import NumberButtons from "../../Components/NumbersButtons/NumberButtons";
import UserNumInputs from "../../Components/UserNumInputs/UserNumInputs";

function GamePage() {
  const [computerNumbers, setComputerNumbers] = useState({});
  const [comparingResult, setComparingResult] = useState([]);
  const [userNumber, setUserNumber] = useState({
    firstNum: "",
    secondNum: "",
    thirdNum: "",
    fourthNum: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    console.log(computerNumbers);
  }, [computerNumbers]);

  useEffect(() => {
    console.log(comparingResult);
  }, [comparingResult]);

  useEffect(() => {
    const random = () => Math.floor(Math.random() * 10);
    setComputerNumbers({
      firstNum: random(),
      secondNum: random(),
      thirdNum: random(),
      fourthNum: random(),
    });
  }, []);

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

  console.log(error);

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

  const compareNumbers = () => {
    if (
      !userNumber.firstNum ||
      !userNumber.secondNum ||
      !userNumber.thirdNum ||
      !userNumber.fourthNum
    ) {
      setError("There is error!");
      return;
    }

    const userNumberArray = [
      +userNumber.firstNum,
      +userNumber.secondNum,
      +userNumber.thirdNum,
      +userNumber.fourthNum,
    ];

    const computerNumbersArray = [
      +computerNumbers.firstNum,
      +computerNumbers.secondNum,
      +computerNumbers.thirdNum,
      +computerNumbers.fourthNum,
    ];

    const lastResult = [];
    let temporary = { result: "", index: -1 };

    userNumberArray.forEach((number, userNumIndex) => {
      computerNumbersArray.forEach((computerNumber, computerNumIndex) => {
        temporary.result = "";
        if (number === computerNumber && userNumIndex === computerNumIndex) {
          lastResult.push("+");
          computerNumbersArray[computerNumIndex] = "*";
          if (temporary.result === "-") {
            temporary.result = "";
          }
        } else if (
          number === computerNumber &&
          userNumIndex !== computerNumIndex
        ) {
          temporary.result = "-";
          temporary.index = computerNumIndex;
        }
        if (temporary.result === "-") {
          lastResult.push("-");
          computerNumbersArray[temporary.index] = "*";
        }
      });
    });

    if (lastResult.length === 0) {
      lastResult.push("No numbers");
    }
    setComparingResult([...comparingResult, lastResult]);
  };

  return (
    <div>
      <div className="results"></div>
      <div className="game-controller">
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
        />
        <button onClick={() => compareNumbers()}>Compare</button>
      </div>
      <div className="game-navbar"></div>
    </div>
  );
}

export default GamePage;

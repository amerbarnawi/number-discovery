import React, { useEffect } from "react";
import Timer from "../Timer/Timer";
import { GiBrainstorm } from "react-icons/gi";
import { RiShieldStarFill } from "react-icons/ri";
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { useGlobalVariables } from "../../Context/GlobalVariables";
import "../TimerAndEvaluation/TimerAndEvaluation.css";

function TimerAndEvaluation({ isRestart, arrow, setArrow }) {
  const { star, brain } = useGlobalVariables();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setArrow({
        brainUp: false,
        brainDown: false,
        starUp: false,
      });
    }, 2000);
    return () => clearTimeout(timeOut);
  });

  const getBrainClass = (state) => {
    if (arrow.brainUp && state === "up") {
      return "brain-arrow arrow-up";
    } else if (arrow.brainDown && state === "down") {
      return "brain-arrow arrow-down";
    } else {
      return "arrow-hidden";
    }
  };

  return (
    <div className="timer-and-evaluation">
      <div className="brain-container">
        <GiBrainstorm className="brain-icon" /> {brain}{" "}
        <FaArrowAltCircleUp className={getBrainClass("up")} />
        <FaArrowCircleDown className={getBrainClass("down")} />
      </div>
      <Timer isRestart={isRestart} />
      <div className="star-container">
        <FaArrowAltCircleUp
          className={arrow.starUp ? "star-arrow" : "arrow-hidden"}
        />{" "}
        {star} <RiShieldStarFill className="star-icon" />
      </div>
    </div>
  );
}

export default TimerAndEvaluation;

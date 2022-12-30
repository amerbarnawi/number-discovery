import React, { useEffect } from "react";
import Timer from "../Timer/Timer";
import { GiBrainstorm } from "react-icons/gi";
import { RiShieldStarFill } from "react-icons/ri";
import { FaArrowAltCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { useGlobalVariables } from "../../Context/GlobalVariables";

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

  console.log(arrow);

  const getBrainClass = (state) => {
    if (arrow.brainUp && state === "up") {
      return "brain-arrow";
    } else if (arrow.brainDown && state === "down") {
      return "brain-arrow";
    } else {
      return "arrow-hidden";
    }
  };

  return (
    <div className="timer-and-evaluation">
      <div>
        <GiBrainstorm /> {brain}{" "}
        <FaArrowAltCircleUp className={getBrainClass("up")} />
        <FaArrowCircleDown className={getBrainClass("down")} />
      </div>
      <Timer isRestart={isRestart} />
      <div>
        <FaArrowAltCircleUp
          className={arrow.starUp ? "star-arrow" : "arrow-hidden"}
        />{" "}
        {star} <RiShieldStarFill />
      </div>
    </div>
  );
}

export default TimerAndEvaluation;

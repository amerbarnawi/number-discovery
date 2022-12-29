import React from "react";
import Timer from "../Timer/Timer";
import { GiBrainstorm } from "react-icons/gi";
import { RiShieldStarFill } from "react-icons/ri";
import { useGlobalVariables } from "../../Context/GlobalVariables";

function TimerAndEvaluation({ isRestart }) {
  const { star, brain } = useGlobalVariables();

  return (
    <div className="timer-and-evaluation">
      <div>
        <GiBrainstorm /> {brain}
      </div>
      <Timer isRestart={isRestart} />
      <div>
        {star} <RiShieldStarFill />
      </div>
    </div>
  );
}

export default TimerAndEvaluation;

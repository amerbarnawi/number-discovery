import React, { useEffect, useState } from "react";
import { GiPartyPopper } from "react-icons/gi";
import winner from "../../assets/winner.gif";
import "../FinalReport/FinalReport.css";
import { useGlobalVariables } from "../../Context/GlobalVariables";
import { GiBrainstorm, GiSandsOfTime } from "react-icons/gi";
import { RiShieldStarFill } from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";

function FinalReport({ comparingResult }) {
  const [finalResult, setFinalResult] = useState(0);
  const { star, brain, time, endTime } = useGlobalVariables();

  // Calculation of the final result (100%)
  //  The evaluation is not releaseEvents, but it is a principle.

  // First 3 min are free
  // Every min = -5
  const timeCost = -(endTime - 3) * 5;
  // The extra brain = 6
  const brainCost = brain > 10 ? (brain - 10) * 6 : (brain - 10) * 3;
  // The star = 3
  const starCost = star * 3;
  // Every attempt = -2, the first 3 attempt are free
  const attemptCost = -(comparingResult.length - 3) * 2;
  const result = 100 + (brainCost + starCost + attemptCost + timeCost);
  useEffect(() => {
    setFinalResult(result);
    // console.log(timeCost, brainCost, starCost, attemptCost);
  }, [result]);

  return (
    <div className="final-report">
      <img src={winner} alt="win cub" />
      <h2>
        Congratulations, you won! <GiPartyPopper />
      </h2>
      <div className="user-evaluations">
        <p>
          <GiBrainstorm className="icon" /> {brain}
        </p>
        <p>
          <RiShieldStarFill className="icon" /> {star}
        </p>
        <p>
          <BsCardChecklist className="icon" /> {comparingResult.length}
        </p>

        <p>
          <GiSandsOfTime className="icon" /> {time}
        </p>
      </div>
      <h2>
        Your final result is:
        <span> {finalResult > 100 ? 100 : finalResult.toFixed(2)} %</span>
      </h2>
    </div>
  );
}

export default FinalReport;

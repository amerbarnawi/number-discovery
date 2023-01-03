import React from "react";
import { useGlobalVariables } from "../../Context/GlobalVariables";
import { GiBrainstorm } from "react-icons/gi";
import { RiShieldStarFill } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import { BsCardChecklist } from "react-icons/bs";
import "../Report/Report.css";

function Report({ comparingResult }) {
  const { star, brain, time, setIsReport } = useGlobalVariables();

  return (
    <div className="report-card">
      <h3>Report</h3>
      <p>
        <GiBrainstorm /> {brain}
      </p>
      <p>
        <RiShieldStarFill /> {star}
      </p>
      <p>
        <BsCardChecklist /> {comparingResult.length}
      </p>
      <p>
        <GiSandsOfTime /> {time}
      </p>
      <button onClick={() => setIsReport(false)}>Close</button>
    </div>
  );
}

export default Report;

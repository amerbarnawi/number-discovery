import React from "react";
import { useGlobalVariables } from "../../Context/GlobalVariables";
import { GiBrainstorm } from "react-icons/gi";
import { RiShieldStarFill } from "react-icons/ri";
import { GiSandsOfTime } from "react-icons/gi";
import "../Report/Report.css";

function Report() {
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
        <GiSandsOfTime /> {time}
      </p>
      <button onClick={() => setIsReport(false)}>Close</button>
    </div>
  );
}

export default Report;

import React, { useEffect, useState } from "react";
import "./Timer.css";

function Timer({ isRestart }) {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    setSecond(0);
    setMinute(0);
    setHour(0);
  }, [isRestart]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (second < 59) {
        setSecond(second + 1);
      } else {
        setSecond(0);
        setMinute(minute + 1);

        if (minute < 59) {
          setMinute(minute + 1);
        } else {
          setMinute(0);
          setHour(hour + 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [second, minute, hour]);

  return (
    <div className="timer-container">
      <div className="hour-container">
        <p>{hour < 10 ? `0${hour}` : hour}</p>
        <p>Hours</p>
      </div>
      <div className="minute-container">
        <p>{minute < 10 ? `0${minute}` : minute}</p>
        <p>Minutes</p>
      </div>
      <div className="second-container">
        <p>{second < 10 ? `0${second}` : second}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
}

export default Timer;

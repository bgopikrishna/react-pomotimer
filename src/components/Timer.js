import React from "react";
import { displaySecondsLeft } from "../helperFunctions/displaySeconds";

const Timer = ({ presentSesh, secondsLeft, sessionLength }) => {
  let display = displaySecondsLeft(secondsLeft)
    ? displaySecondsLeft(secondsLeft)
    : displaySecondsLeft(sessionLength * 60);

  return (
    <div className="timer">
      <div className="timer-wrapper">
        <div id="timer-label">{presentSesh}</div>
        <div id="time-left" >
          {display}
        </div>
      </div>
    </div>
  );
};

export default Timer;

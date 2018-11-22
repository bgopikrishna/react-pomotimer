import React from "react";

const TimerControls = ({ handleTimer, handleReset }) => {
  return (
    <div className="timer-controls" >
      <button id="start_stop" onClick={() => handleTimer()}>
        <i className="fas fa-pause" />
      </button>
      <button id="reset" onClick={() => handleReset()}>
      <i className="fas fa-sync-alt"></i>
      </button>
    </div>
  );
};

export default TimerControls;

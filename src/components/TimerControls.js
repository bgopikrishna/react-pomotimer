import React from "react";

const TimerControls = ({ handleTimer, handleReset, isPaused }) => {
  const playIcon = isPaused ?  <i className="fas fa-play" /> :  <i className="fas fa-pause" />
  return (
    <div className="timer-controls" >
      <button id="start_stop" onClick={() => handleTimer()}>
       
      </button>
      <button id="reset" onClick={() => handleReset()}>
      <i className="fas fa-sync-alt"></i>
      </button>
    </div>
  );
};

export default TimerControls;

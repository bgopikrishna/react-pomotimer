import React from "react";

const TimerControls = ({ handleTimer, handleReset, isPaused }) => {
  const playIcon = isPaused ?  <i className="fas fa-play" /> :  <i className="fas fa-pause" />
  return (
    <div className="timer-controls" >
      <button id="start_stop" onClick={() => handleTimer()} role="play and pause">
       {playIcon}
      </button>
      <button id="reset" onClick={() => handleReset()} role="reset">
      <i className="fas fa-sync-alt"></i>
      </button>
    </div>
  );
};

export default TimerControls;

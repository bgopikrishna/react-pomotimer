import React from "react";

const TimerControls = ({ handleTimer, handleReset, isPaused }) => {
  const playIcon = isPaused ? (
    <i className="fas fa-play" />
  ) : (
    <i className="fas fa-pause" />
  );
  return (
    <div className="timer-controls">
      <button
        id="start_stop"
        onClick={() => handleTimer()}
        title="play and pause"
      >
        {playIcon}
      </button>
      <button id="reset" onClick={() => handleReset()} title="reset">
        <i className="fas fa-sync-alt" />
      </button>
    </div>
  );
};

export default TimerControls;

import React, { Component } from "react";
import { displaySecondsLeft } from "../helperFunctions/displaySeconds";

export class Timer extends Component {
  render() {
    const { presentSesh, secondsLeft, sessionLength } = this.props;

    let display = displaySecondsLeft(secondsLeft)
      ? displaySecondsLeft(secondsLeft)
      : displaySecondsLeft(sessionLength * 60);

    return (
      <div className="timer">
        <div className="timer-wrapper">
          <div id="timer-label">{presentSesh}</div>
          <div id="time-left">{display}</div>
        </div>
      </div>
    );
  }
}

export default Timer;

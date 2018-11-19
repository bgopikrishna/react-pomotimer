import React, { Component } from "react";
import "./App.css";
import LengthContols from "./components/lengthContols";
import Timer from "./components/Timer";
import TimerControls from "./components/TimerControls";
let countdown;

export class App extends Component {
  state = {
    breakLength: 5,
    sessionLength: 25,
    secondsLeft: 1500,
    timeLeft: 1500,
    reverseTimer: false,
    presentSesh: "Session",
    timerState: "pause"
  };

  increment = type => {
    if (type === "break") {
      const { breakLength } = this.state;
      if (breakLength > 0 && breakLength < 60) {
        this.setState({
          breakLength: breakLength + 1
        });
      }
    } else {
      const { sessionLength } = this.state;
      if (sessionLength > 0 && sessionLength < 60) {
        this.setState({
          sessionLength: sessionLength + 1
        });
      }
    }
  };
  decrement = type => {
    if (type === "break") {
      const { breakLength } = this.state;
      if (breakLength > 1 && breakLength <= 60) {
        this.setState({
          breakLength: breakLength - 1
        });
      }
    } else {
      const { sessionLength } = this.state;
      if (sessionLength > 1 && sessionLength <= 60) {
        this.setState({
          sessionLength: sessionLength - 1
        });
      }
    }
  };

  pomotimer = seconds => {
    //clear existing timers
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      // check if we should stop it!
      if (secondsLeft < 0) {
        this.setState(
          {
            reverseTimer: !this.setState.reverseTimer
          },
          this.correctTimer(this.setState.reverseTimer)
        );
        clearInterval(countdown);
        return;
      }
      // display it

      this.setState({
        timeLeft: secondsLeft
      });
    }, 1000);
  };

  handleReset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      secondsLeft: 1500,
      timeLeft: 1500,
      reverseTimer: true,
      presentSesh: "Session",
      timerState: "pause"
    });
  };
  handleTimer = () => {
    this.correctTimer(this.state.reverseTimer);
  };

  correctTimer = reverseTimer => {
    const {
      breakLength,
      sessionLength,
      secondsLeft,
      timeLeft,
      presentSesh,
      timerState
    } = this.state;
    if (!reverseTimer) {
      this.setState(
        {
          presentSesh: "session",
          secondsLeft: sessionLength * 60,
          timerState: "start"
        },
        this.pomotimer(secondsLeft)
      );
    } else {
      this.setState(
        {
          presentSesh: "break",
          secondsLeft: breakLength * 60,
          timerState: "start"
        },
        this.pomotimer(secondsLeft)
      );
    }
  };

  render() {
    const {
      breakLength,
      sessionLength,
      secondsLeft,
      timeLeft,
      reverseTimer,
      presentSesh
    } = this.state;
    return (
      <div className="app">
        <div className="title">
          <h1>Pomodoro Timer</h1>
        </div>
        <div className="length">
          <LengthContols
            type={"break"}
            length={breakLength}
            increment={this.increment}
            decrement={this.decrement}
          />
          <LengthContols
            type={"session"}
            length={sessionLength}
            increment={this.increment}
            decrement={this.decrement}
          />
        </div>
        <Timer
          presentSesh={presentSesh}
          secondsLeft={timeLeft}
          sessionLength={sessionLength}
        />
        <TimerControls
          handleReset={this.handleReset}
          handleTimer={this.handleTimer}
        />
      </div>
    );
  }
}

export default App;

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
    presentSesh: "session",
    timerState: "pause",
    isPaused: true,

    timerFunc: ""
  };

  increment = type => {
    if (this.state.isPaused) {
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
            sessionLength: sessionLength + 1,
            secondsLeft: (sessionLength + 1) * 60
          });
        }
      }
    }
  };
  decrement = type => {
    if (this.state.isPaused) {
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
            sessionLength: sessionLength - 1,
            secondsLeft: (sessionLength - 1) * 60,
          });
        }
      }
    }
  };

  handleReset = async () => {

    this.setState({
      breakLength: 5,
      sessionLength: 25,
      secondsLeft: 1500,
      timeLeft: 1500,
      reverseTimer: false,
      presentSesh: "session",
      timerState: "pause",
      isPaused: true
    });
    clearInterval(countdown);

    this.myaudio.pause();
    this.myaudio.currentTime = 0;
  };
  handleTimer = () => {
    if (this.state.isPaused) {
      this.startTimer();
      this.setState({
        timerState: "started",
        isPaused: false
      });
    } else {
      clearInterval(countdown);
      this.setState({
        timerState: "pause",
        isPaused: true
      });
    }
  };
  startTimer = () => {
    countdown = setInterval(() => {
      this.setState({
        secondsLeft: this.state.secondsLeft - 1
      });

      
      if (this.state.secondsLeft < 0) {
        if (this.state.presentSesh === "session") {
          this.setState({
            presentSesh: "break",
            secondsLeft: this.state.breakLength * 60
          });
        } else {
          clearInterval(countdown)
          this.setState({
            presentSesh: "session",
            secondsLeft: this.state.sessionLength * 60
          });
          this.startTimer();
        }
      }
      if (this.state.secondsLeft === 0) {
        this.myaudio.currentTime = 0;
        this.myaudio.play();
      }
    }, 1000);
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
          secondsLeft={secondsLeft}
          sessionLength={sessionLength}
        />
        <TimerControls
          handleReset={this.handleReset}
          handleTimer={this.handleTimer}
        />
        <audio
          src="https://www.dropbox.com/s/v007rwxvtxv4t8h/Timed_Out.mp3?dl=1"
          id="beep"
          ref={audio => (this.myaudio = audio)}
        />
      </div>
    );
  }
}

export default App;

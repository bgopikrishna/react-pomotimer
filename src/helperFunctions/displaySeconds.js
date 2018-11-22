const displaySecondsLeft = seconds => {
  let minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" + remainderSeconds : remainderSeconds
  }`;

  return display;
};

export { displaySecondsLeft};


 (function() {
  window.accurateInterval = function(fn, time) {
    var cancel, nextAt, timeout, wrapper;
    nextAt = new Date().getTime() + time;
    timeout = null;
    wrapper = function() {
      nextAt += time;
      timeout = setTimeout(wrapper, nextAt - new Date().getTime());
      return fn();
    };
    cancel = function() {
      return clearTimeout(timeout);
    };
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return {
      cancel: cancel
    };
  };
}.call(this));


// let timer = () => {
//   let { secondsLeft } = this.state;
//   // check if we should stop it!
//   secondsLeft = secondsLeft - 1;
//   if (secondsLeft === 0) {
//     this.myaudio.play();
//   }
//   if (secondsLeft < 0) {
//     this.setState(
//       {
//         reverseTimer: !this.setState.reverseTimer
//       },
//       () => this.correctTimer(this.setState.reverseTimer)
//     );
//     if (this.state.reverseTimer) {
//       this.setState(
//         {
//           secondsLeft: this.state.breakLength * 60,
//           presentSesh: "break"
//         },
//         () => {
//           this.correctTimer(this.state.reverseTimer);
//         }
//       );
//     } else {
//       this.setState(
//         {
//           secondsLeft: this.state.sessionLength * 60,
//           presentSesh: "session"
//         },
//         () => this.correctTimer(this.state.reverseTimer)
//       );
//     }

//     clearInterval(countdown);
//     return;
//   }
//   if (this.state.pauseTimer) {
//     this.setState({
//       secondsLeft: secondsLeft
//     });
//     clearInterval(countdown);
//     return;
//   }

//   this.setState({
//     secondsLeft: secondsLeft
//   });

//   if (this.state.reset) {
//     clearInterval(countdown);
//     return;
//   }
// };
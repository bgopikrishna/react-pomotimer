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

import React from "react";

const LengthContols = ({ type, length, increment, decrement }) => {
  return (
    <div className="length-controls">
      <div id={type + "-label"}>{type + " Length"}</div>
      <button id={type + "-decrement"} onClick={() => decrement(type)} role={"Decrease " +type+" length"}>
        -
      </button>
      <div id={type + "-length"}>{length}</div>
      <button id={type + "-increment"} onClick={() => increment(type)} role={"Increase " +type+" length"}>
        +
      </button>
    </div>
  );
};

export default LengthContols;

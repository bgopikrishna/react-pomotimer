import React from "react";

const LengthContols = ({ type, length, increment, decrement }) => {
  return (
    <div className="length-controls">
      <div id={type + "-label"}>
        <h4>{type + " Length"}</h4>
      </div>
      <button
        className="decrement"
        id={type + "-decrement"}
        onClick={() => decrement(type)}
        title={"Decrease " + type + " length"}
      >
        -
      </button>
      <div id={type + "-length"}>{length}</div>
      <button
        className="increment"
        id={type + "-increment"}
        onClick={() => increment(type)}
        title={"Increase " + type + " length"}
      >
        +{" "}
      </button>
    </div>
  );
};

export default LengthContols;

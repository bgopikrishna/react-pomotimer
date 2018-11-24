import React from "react";

const LengthContols = ({ type, length, increment, decrement }) => {
  return (
    <div className="length-controls">
      <div id={type + "-label"} ><h4>{type + " Length"}</h4></div>
      <button className="decrement" id={type + "-decrement"} onClick={() => decrement(type)} role={"Decrease " +type+" length"}>
      <i className="fas fa-arrow-circle-down"></i>
      </button>
      <div id={type + "-length"}>{length}</div>
      <button className="increment" id={type + "-increment"} onClick={() => increment(type)} role={"Increase " +type+" length"}>
      <i className="fas fa-arrow-circle-up"></i>      </button>
    </div>
  );
};

export default LengthContols;

import React, { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  let handleincr = () => {
    console.log(counter + 1);
    setCounter(counter + 1);
  };
  let handledecr = () => {
    console.log(counter - 1);
    setCounter(counter - 1);
  };

  const shah = {
    // one more type to write inline css using js object
    color: "red",
  };

  return (
    <div id="rr">
      <p>
        <img src="media/srk pics.jpg" alt="srk" id="oo"></img>
      </p>
      <h2 style={shah}>Counter:-{counter}</h2>
      <button
        type="button "
        className="btn btn-success mb-2"
        onClick={handleincr}
      >
        Increment
      </button>{" "}
      <br />
      <button type="button" className="btn btn-danger" onClick={handledecr}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;

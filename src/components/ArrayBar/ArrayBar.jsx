import React from "react";
import "./ArrayBar.css";

const ArrayBar = (props) => {
  return (
    <div
      className="array-bar"
      key={props.index}
      style={{ height: `${props.height}%` }}
    ></div>
  );
};

export default ArrayBar;

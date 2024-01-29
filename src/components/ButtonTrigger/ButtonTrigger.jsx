import React from "react";
import "./ButtonTrigger.css";

// general button to be reused for triggering different sorting algorithms /
// regenerating the array etc.
const ButtonTrigger = (props) => {
  const buttonName = props.buttonNameAndState.buttonName;
  const state = props.buttonNameAndState.state;
  const setState = props.buttonNameAndState.setState;
  const className = props.buttonNameAndState.className;

  const handleClick = () => {
    setState(!state);
  };

  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export default ButtonTrigger;

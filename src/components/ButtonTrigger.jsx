import React from "react";

// general button to be reused for triggering different sorting algorithms /
// regenerating the array etc.
const ButtonTrigger = (props) => {
  const buttonName = props.buttonNameAndState.buttonName;
  const state = props.buttonNameAndState.state;
  const setState = props.buttonNameAndState.setState;

  const handleClick = () => {
    setState(!state);
  };

  return <button onClick={handleClick}>{buttonName}</button>;
};

export default ButtonTrigger;

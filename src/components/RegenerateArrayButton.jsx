import React from "react";

const RegenerateArrayButton = (props) => {
  const handleClick = () => {
    const regenerateArray = !props.regenerateArray[0];
    const setRegenerateArray = props.regenerateArray[1];
    setRegenerateArray(regenerateArray);
  };

  return <button onClick={handleClick}>Regenerate Array</button>;
};

export default RegenerateArrayButton;

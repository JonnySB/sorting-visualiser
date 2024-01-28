import React from "react";
import "./SortingControls.css";
import ButtonTrigger from "./ButtonTrigger";

const SortingControls = (props) => {
  return (
    <div className="controls-container">
      <ButtonTrigger buttonNameAndState={props.resetArrayButtonNameAndState} />
      <ButtonTrigger buttonNameAndState={props.bubbleSortButtonNameAndState} />
    </div>
  );
};

export default SortingControls;

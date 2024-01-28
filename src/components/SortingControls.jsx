import React from "react";
import "./SortingControls.css";
import ButtonTrigger from "./ButtonTrigger";
import ArraySizeSlider from "./ArraySizeSlider";
import AnimationSpeedSlider from "./AnimationSpeedSlider";

const SortingControls = (props) => {
  return (
    <div className="controls-container">
      <ButtonTrigger buttonNameAndState={props.resetArrayButtonNameAndState} />
      <ArraySizeSlider arraySizeState={props.arraySizeState} />
      <AnimationSpeedSlider
        animationSpeedMSState={props.animationSpeedMSState}
      />
      <ButtonTrigger buttonNameAndState={props.bubbleSortButtonNameAndState} />
    </div>
  );
};

export default SortingControls;

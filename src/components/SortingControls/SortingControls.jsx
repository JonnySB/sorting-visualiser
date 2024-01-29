import React from "react";
import "./SortingControls.css";
import ButtonTrigger from "../ButtonTrigger/ButtonTrigger";
import ArraySizeSlider from "../Sliders/ArraySizeSlider";
import AnimationSpeedSlider from "../Sliders/AnimationSpeedSlider";

const SortingControls = (props) => {
  return (
    <div className="controls-container">
      <div className="animation-controls-container">
        <h1 className="header">Animation Settings</h1>
        <div className="horizontal-container">
          <ArraySizeSlider arraySizeState={props.arraySizeState} />
          <AnimationSpeedSlider
            animationSpeedMSState={props.animationSpeedMSState}
          />
        </div>
        <div className="horizontal-container">
          <ButtonTrigger
            buttonNameAndState={props.resetArrayButtonNameAndState}
          />
          <ButtonTrigger
            buttonNameAndState={props.cancelAnimationButtonNameAndState}
          />
        </div>
      </div>
      <div className="spacer"></div>
      <div className="sorting-buttons-container">
        <ButtonTrigger
          buttonNameAndState={props.bubbleSortButtonNameAndState}
        />
      </div>
    </div>
  );
};

export default SortingControls;

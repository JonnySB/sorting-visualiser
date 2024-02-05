import React from "react";
import "./SortingControls.css";
import ButtonTrigger from "../ButtonTrigger/ButtonTrigger";
import ArraySizeSlider from "../Sliders/ArraySizeSlider";
import AnimationSpeedSlider from "../Sliders/AnimationSpeedSlider";

const SortingControls = (props) => {
  return (
    <div className="controls-container">
      <div className="controls-sub-container">
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
      <div className="controls-sub-container">
        <h1 className="header">Sorting Algorithms</h1>
        <div className="horizontal-container">
          <ButtonTrigger
            buttonNameAndState={props.bubbleSortButtonNameAndState}
          />
          <ButtonTrigger
            buttonNameAndState={props.selectionSortButtonNameAndState}
          />
          <ButtonTrigger
            buttonNameAndState={props.insertionSortButtonNameAndState}
          />
        </div>
      </div>
    </div>
  );
};

export default SortingControls;

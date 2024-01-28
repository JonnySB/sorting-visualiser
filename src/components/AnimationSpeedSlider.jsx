import React from "react";
import "./Slider.css";

const AnimationSpeedSlider = (props) => {
  const handleChangeAnimationSpeed = (event) => {
    const inputEl = event.target;
    props.animationSpeedMSState.setAnimationSpeedMS(inputEl.value);
  };

  return (
    <div className="slider-container">
      <label htmlFor="animation-speed">
        Set Animation Speed
        <br />
        <input
          type="range"
          name="animation-speed"
          id="animation-speed"
          min="5"
          max="300"
          value={props.animationSpeedMSState.animationSpeedMS}
          onChange={handleChangeAnimationSpeed}
        />
        <br />
        {props.animationSpeedMSState.animationSpeedMS} ms
      </label>
    </div>
  );
};

export default AnimationSpeedSlider;

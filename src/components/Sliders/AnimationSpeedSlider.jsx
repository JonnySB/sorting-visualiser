import React from "react";
import "./Slider.css";

const AnimationSpeedSlider = (props) => {
  const handleChangeAnimationSpeed = (event) => {
    const inputEl = event.target;
    props.animationSpeedMSState.setAnimationSpeedMS(inputEl.value);
  };

  return (
    <div className="slider-container">
      <label htmlFor="animation-speed" className="label">
        Set Animation Speed
        <br />
        <input
          className="reverse"
          type="range"
          name="animation-speed"
          id="animation-speed"
          min="1"
          max="300"
          value={props.animationSpeedMSState.animationSpeedMS}
          onChange={handleChangeAnimationSpeed}
        />
      </label>
    </div>
  );
};

export default AnimationSpeedSlider;

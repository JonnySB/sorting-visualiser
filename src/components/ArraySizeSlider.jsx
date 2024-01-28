import React from "react";
import "./Slider.css";

const ArraySizeSlider = (props) => {
  const handleChangeArraySize = (event) => {
    const inputEl = event.target;
    props.arraySizeState.setArraySize(inputEl.value);
  };

  return (
    <div className="slider-container">
      <label htmlFor="array-size">
        {" "}
        Set Array Size <br />
        <input
          type="range"
          name="array-size"
          id="array-size"
          min="5"
          max="100"
          value={props.arraySizeState.arraySize}
          onChange={handleChangeArraySize}
        />
        <br />
        {props.arraySizeState.arraySize} Elements
      </label>
    </div>
  );
};

export default ArraySizeSlider;

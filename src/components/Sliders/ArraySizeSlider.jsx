import React from "react";
import "./Slider.css";

const ArraySizeSlider = (props) => {
  const handleChangeArraySize = (event) => {
    const inputEl = event.target;
    props.arraySizeState.setArraySize(inputEl.value);
  };

  return (
    <div className="slider-container">
      <label htmlFor="array-size" className="label">
        {" "}
        Set Array Size <br />
        <input
          className="slider"
          type="range"
          name="array-size"
          id="array-size"
          min="5"
          max="100"
          value={props.arraySizeState.arraySize}
          onChange={handleChangeArraySize}
        />
      </label>
    </div>
  );
};

export default ArraySizeSlider;

import React, { useState, useEffect, useRef } from "react";
import ArrayBar from "./ArrayBar";
import "./SortingVisualiser.css";
import createBubbleSortAnimations from "../sortingAlgorithms/createBubbleSortAnimations";
import playBubbleSortAnimations from "../sortingAlgorithms/playBubbleSortAnimations";

const SortingVisualiser = (props) => {
  const hasPageBeenRendered = useRef({ bubbleSortEffect: false });
  const [array, setArray] = useState([]);

  // app colour pallet
  const colours = {
    BASE_COLOR_HEX: "#974a00",
    SWAP_COLOR_HEX: "green",
    NO_SWAP_COLOR_HEX: "red",
  };

  // Generate an array of length arrayLength:
  const resetArray = () => {
    const tempArray = [];
    for (let i = 0; i < props.arraySize; i++) {
      // Add an integer between 1-100 to the tempArray
      tempArray.push(Math.floor(Math.random() * 101) + 1);
    }
    setArray(tempArray);
  };

  // Get list of bubble sort animations and play them to the viewer
  const triggerPlayBubbleSortAnimations = () => {
    const annimationsArray = createBubbleSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    playBubbleSortAnimations(
      annimationsArray,
      arrayBars,
      props.animationSpeedMS,
      colours,
    );
  };

  // Generate new array on page reload
  useEffect(() => {
    resetArray();
  }, [props.resetArrayTrigger, props.arraySize]);

  // Trigger Bubble Sort:
  useEffect(() => {
    if (hasPageBeenRendered.current.bubbleSortEffect) {
      triggerPlayBubbleSortAnimations();
    }
    hasPageBeenRendered.current.bubbleSortEffect = true;
  }, [props.bubbleSortTrigger]);

  return (
    <div className="array-container">
      {array.map((height, index) => {
        return <ArrayBar height={height} index={index} />;
      })}
    </div>
  );
};

export default SortingVisualiser;

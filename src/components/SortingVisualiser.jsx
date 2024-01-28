import React, { useState, useEffect, useRef } from "react";
import ArrayBar from "./ArrayBar";
import "./SortingVisualiser.css";
import createBubbleSortAnimations from "../sortingAlgorithms/sortingAlgorithms";

const SortingVisualiser = (props) => {
  const hasPageBeenRendered = useRef({ bubbleSortEffect: false });
  const [array, setArray] = useState([]);

  const ANIMATION_SPEED = 200;

  // app colour pallet
  const BASE_COLOR_HEX = "#974a00";
  const TARGET_COLOR_HEX = "blue";
  const SWAP_COLOR_HEX = "green";
  const NO_SWAP_COLOR_HEX = "red";

  // Generate an array of length arrayLength:
  const resetArray = () => {
    const tempArray = [];
    for (let i = 0; i < 6; i++) {
      // Add an integer between 1-100 to the tempArray
      tempArray.push(Math.floor(Math.random() * 101) + 1);
    }
    setArray(tempArray);
  };

  // Get list of bubble sort animations and play them to the viewer
  const bubbleSort = () => {
    const annimationsArray = createBubbleSortAnimations(array);

    for (let i = 0; i < annimationsArray.length; i++) {
      const [[i1, i2], swap] = annimationsArray[i];
      const arrayBars = document.getElementsByClassName("array-bar");

      const isColourChange = i % 3 === 0;
      const isSwap = i % 3 === 1;
      // const isColourCleanUp = i % 3 === 2;

      const barOneStyle = arrayBars[i1].style;
      const barTwoStyle = arrayBars[i2].style;
      if (isColourChange) {
        // highlight target bars in TARGET_COLOR_HEX
        setTimeout(() => {
          barOneStyle.backgroundColor = TARGET_COLOR_HEX;
          barTwoStyle.backgroundColor = TARGET_COLOR_HEX;
        }, i * ANIMATION_SPEED);
      } else if (isSwap) {
        if (swap) {
          // If swapping highlight in SWAP_COLOR_HEX and swap
          setTimeout(() => {
            barOneStyle.backgroundColor = SWAP_COLOR_HEX;
            barTwoStyle.backgroundColor = SWAP_COLOR_HEX;

            const tempHeight = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = tempHeight;
          }, i * ANIMATION_SPEED);
        } else {
          // If not swapping highlight in NO_SWAP_COLOR_HEX
          setTimeout(() => {
            barOneStyle.backgroundColor = NO_SWAP_COLOR_HEX;
            barTwoStyle.backgroundColor = NO_SWAP_COLOR_HEX;
          }, i * ANIMATION_SPEED);
        }
      } else {
        // isColourCleanup
        // Cange colour of target bars back to app base colour
        setTimeout(() => {
          barOneStyle.backgroundColor = BASE_COLOR_HEX;
          barTwoStyle.backgroundColor = BASE_COLOR_HEX;
        }, i * ANIMATION_SPEED);
      }
    }
  };

  // Generate new array on page reload
  useEffect(() => {
    resetArray();
  }, [props.resetArrayTrigger]);

  // Trigger Bubble Sort:
  useEffect(() => {
    if (hasPageBeenRendered.current.bubbleSortEffect) {
      bubbleSort();
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

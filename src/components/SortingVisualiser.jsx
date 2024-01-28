import React, { useState, useEffect, useRef } from "react";
import ArrayBar from "./ArrayBar";
import "./SortingVisualiser.css";
import createBubbleSortAnimations from "../sortingAlgorithms/sortingAlgorithms";

const SortingVisualiser = (props) => {
  const hasPageBeenRendered = useRef({ bubbleSortEffect: false });
  const [array, setArray] = useState([]);

  // app colour pallet
  const BASE_COLOR_HEX = "#974a00";
  const SWAP_COLOR_HEX = "green";
  const NO_SWAP_COLOR_HEX = "red";

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
  const bubbleSort = () => {
    // for each potential swap, annimations array creates three identical
    // elements (a triplet). This allows the setTimeout to work correctly below.
    // I.e. 1st element used to colour target elements, second to perform the
    // swap, and the 3rd element to clean up the colours.
    const annimationsArray = createBubbleSortAnimations(array);

    for (let i = 0; i < annimationsArray.length; i++) {
      const [[i1, i2], swap] = annimationsArray[i];
      const arrayBars = document.getElementsByClassName("array-bar");
      const barOneStyle = arrayBars[i1].style;
      const barTwoStyle = arrayBars[i2].style;

      // unpacking triplets for conditionals below. (else, or i%3===2, is colour
      // cleanup)
      const isColourChange = i % 3 === 0;
      const isSwap = i % 3 === 1;

      if (isColourChange) {
        if (swap) {
          // IF-SWAPPING - highlight in SWAP_COLOR_HEX
          setTimeout(() => {
            changeBarColours(barOneStyle, barTwoStyle, SWAP_COLOR_HEX);
          }, i * props.animationSpeedMS);
        } else {
          // IF-NOT-SWAPPING - highlight in NO_SWAP_COLOR_HEX
          setTimeout(() => {
            changeBarColours(barOneStyle, barTwoStyle, NO_SWAP_COLOR_HEX);
          }, i * props.animationSpeedMS);
        }
      } else if (isSwap) {
        if (swap) {
          // IF-SWAPPING - highlight in SWAP_COLOR_HEX and swap
          setTimeout(() => {
            const tempHeight = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = tempHeight;
          }, i * props.animationSpeedMS);
        } else {
          setTimeout(() => {}, i * props.animationSpeedMS);
        }
      } else {
        // POST-SWAP - clean up colours back to BASE_COLOR_HEX
        setTimeout(() => {
          changeBarColours(barOneStyle, barTwoStyle, BASE_COLOR_HEX);
        }, i * props.animationSpeedMS);
      }
    }
  };

  // Generate new array on page reload
  useEffect(() => {
    resetArray();
  }, [props.resetArrayTrigger, props.arraySize]);

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

// Helper Methods:
function changeBarColours(barOneStyle, barTwoStyle, colour) {
  barOneStyle.backgroundColor = colour;
  barTwoStyle.backgroundColor = colour;
}

export default SortingVisualiser;

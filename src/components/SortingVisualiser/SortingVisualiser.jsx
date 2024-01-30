import React, { useState, useEffect, useRef } from "react";
import ArrayBar from "../ArrayBar/ArrayBar";
import "./SortingVisualiser.css";
import createBubbleSortAnimations from "../../sortingAlgorithms/BubbleSort/createBubbleSortAnimations";
import playBubbleSortAnimations from "../../sortingAlgorithms/BubbleSort/playBubbleSortAnimations";

const timeoutIds = [];

const SortingVisualiser = (props) => {
  const hasPageBeenRendered = useRef({
    bubbleSortEffect: false,
    cancelAnimation: false,
  });
  const [array, setArray] = useState([]);

  // app colour pallet
  const colours = {
    BASE_COLOR_HEX: "#f5a97f",
    SWAP_COLOR_HEX: "#ed8796",
    NO_SWAP_COLOR_HEX: "#a6da95",
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
    timeoutIds.push(
      ...playBubbleSortAnimations(
        annimationsArray,
        arrayBars,
        props.animationSpeedMS,
        colours,
      ),
    );
  };

  // Generate new array on page reload
  useEffect(() => {
    resetArray();
  }, [props.resetArrayTrigger, props.arraySize]);

  // Trigger cancelling an animation
  useEffect(() => {
    if (hasPageBeenRendered.current.cancelAnimation) {
      timeoutIds.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      // reset colours
      const arrayBars = document.getElementsByClassName("array-bar");
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = colours.BASE_COLOR_HEX;
      }
    }
    hasPageBeenRendered.current.cancelAnimation = true;
  }, [props.cancelAnimationTrigger]);

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

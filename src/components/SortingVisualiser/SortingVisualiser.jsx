import React, { useState, useEffect, useRef } from "react";
import ArrayBar from "../ArrayBar/ArrayBar";
import "./SortingVisualiser.css";
import createBubbleSortAnimations from "../../sortingAlgorithms/BubbleSort/createBubbleSortAnimations";
import playBubbleSortAnimations from "../../sortingAlgorithms/BubbleSort/playBubbleSortAnimations";
import createSelectionSortAnimations from "../../sortingAlgorithms/SelectionSort/createSelectionSortAnimations";
import playSelectionSortAnimations from "../../sortingAlgorithms/SelectionSort/playSelectionSortAnimations";
import playInsertionSortAnimations from "../../sortingAlgorithms/InsertionSort/playInsertionSortAnimations";
import createInsertionSortAnimations from "../../sortingAlgorithms/InsertionSort/createInsertionSortAnimations";

const timeoutIds = [];

const SortingVisualiser = (props) => {
  const hasPageBeenRendered = useRef({
    cancelAnimation: false,
    bubbleSortEffect: false,
    selectionSortEffect: false,
    insertionSortEffect: false,
  });
  const [array, setArray] = useState([]);

  // app colour pallet
  const colours = {
    BASE_COLOR_HEX: "#f5a97f",
    SWAP_COLOR_HEX: "#ed8796",
    NO_SWAP_COLOR_HEX: "#a6da95",
    BASE_COLOUR_HEX: "#f5a97f",
    GREEN_COLOUR_HEX: "#a6da95",
    RED_COLOUR_HEX: "#ed8796",
    BLUE_COLOUR_HEX: "#89b4fa",
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

  // Get list of selection sort animations and play them to the viewer
  const triggerSelectionSortAnimations = () => {
    const annimationsArray = createSelectionSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    timeoutIds.push(
      ...playSelectionSortAnimations(
        annimationsArray,
        arrayBars,
        props.animationSpeedMS,
        colours,
      ),
    );
  };

  // Get list of insertion sort animations and play them to the viewer
  const triggerInsertionSortAnimations = () => {
    const annimationsArray = createInsertionSortAnimations(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    timeoutIds.push(
      ...playInsertionSortAnimations(
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

  // Trigger Selection Sort:
  useEffect(() => {
    if (hasPageBeenRendered.current.selectionSortEffect) {
      triggerSelectionSortAnimations();
    }
    hasPageBeenRendered.current.selectionSortEffect = true;
  }, [props.selectionSortTrigger]);

  // Trigger Insertion Sort:
  useEffect(() => {
    if (hasPageBeenRendered.current.insertionSortEffect) {
      triggerInsertionSortAnimations();
    }
    hasPageBeenRendered.current.insertionSortEffect = true;
  }, [props.insertionSortTrigger]);

  return (
    <div className="array-container">
      {array.map((height, index) => {
        return <ArrayBar height={height} index={index} />;
      })}
    </div>
  );
};

export default SortingVisualiser;

import swapBarHeights from "../../helperMethods/swapBarHeights";

const playSelectionSortAnimations = (
  annimationsArray,
  arrayBars,
  animationSpeedMS,
  colours,
) => {
  const timeoutIDs = [];
  for (let i = 0; i < annimationsArray.length; i++) {
    let [operation, payload] = annimationsArray[i];

    // reset bars ready to be searched after each loop
    if (operation === "reset") {
      timeoutIDs.push(
        setTimeout(() => {
          for (let j = payload; j < arrayBars.length; j++) {
            arrayBars[j].style.backgroundColor = colours.BASE_COLOUR_HEX;
          }
        }, i * animationSpeedMS),
      );
    }

    // set starting minimum to green
    if (operation === "setStartMin") {
      timeoutIDs.push(
        setTimeout(() => {
          let i1 = payload;
          arrayBars[i1].style.backgroundColor = colours.GREEN_COLOUR_HEX;
        }, i * animationSpeedMS),
      );
    }

    // set searched elements to red
    if (operation === "ticker") {
      const [i1, minIndex] = payload;
      timeoutIDs.push(
        setTimeout(() => {
          // set previous to base if not current mij
          if (i1 - 1 !== minIndex) {
            arrayBars[i1 - 1].style.backgroundColor = colours.BASE_COLOUR_HEX;
          }

          // set current search element to red
          arrayBars[i1].style.backgroundColor = colours.RED_COLOUR_HEX;
        }, i * animationSpeedMS),
      );
    }

    // make old current min red (searched) and make new current min green
    if (operation === "swapCurrentMins") {
      const [oldMin, newMin] = payload;
      timeoutIDs.push(
        setTimeout(() => {
          arrayBars[oldMin].style.backgroundColor = colours.BASE_COLOUR_HEX;
          arrayBars[newMin].style.backgroundColor = colours.GREEN_COLOUR_HEX;
        }, i * animationSpeedMS),
      );
    }

    // swap min to end of sorted section:
    if (operation === "swapMinHeight") {
      const [swap_i, min_i] = payload;
      timeoutIDs.push(
        setTimeout(() => {
          const swap_element = arrayBars[swap_i].style;
          const min_element = arrayBars[min_i].style;
          swapBarHeights(swap_element, min_element);
          min_element.backgroundColor = colours.RED_COLOUR_HEX;
          swap_element.backgroundColor = colours.GREEN_COLOUR_HEX;
        }, i * animationSpeedMS),
      );
    }

    if (operation === "pauseOnSorted") {
      const swap_i = payload;
      timeoutIDs.push(
        setTimeout(() => {
          const swap_element = arrayBars[swap_i].style;
          swap_element.backgroundColor = colours.GREEN_COLOUR_HEX;
          for (let j = swap_i + 1; j < arrayBars.length; j++) {
            arrayBars[j].style.backgroundColor = colours.BASE_COLOUR_HEX;
          }
        }, i * animationSpeedMS),
      );
    }

    // set sorted element colour to blue
    if (operation === "setSortedColour") {
      const swap_i = payload;
      timeoutIDs.push(
        setTimeout(() => {
          const swap_element = arrayBars[swap_i].style;
          swap_element.backgroundColor = colours.BLUE_COLOUR_HEX;
        }, i * animationSpeedMS),
      );
    }
  }

  return timeoutIDs;
};

export default playSelectionSortAnimations;

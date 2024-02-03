const createSelectionSortAnimations = (array) => {
  const animationsArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    // reset unsearched array bars to base for current loop.
    animationsArray.push(["reset", i]);

    let minIndex = i;
    // set current min as green
    animationsArray.push(["setStartMin", minIndex]);

    for (let j = i + 1; j < array.length; j++) {
      // make searched items red
      animationsArray.push(["ticker", [j, minIndex]]);
      if (array[j] < array[minIndex]) {
        const oldMin = minIndex;
        minIndex = j;
        // change old min to red, and new min to green
        animationsArray.push(["swapCurrentMins", [oldMin, minIndex]]);
      } else {
      }
    }
    // swap heights
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
    animationsArray.push(["swapMinHeight", [i, minIndex]]);
    animationsArray.push(["pauseOnSorted", i]);
    animationsArray.push(["pauseOnSorted", i]);
    animationsArray.push(["pauseOnSorted", i]);
    animationsArray.push(["setSortedColour", i]);
  }
  animationsArray.push(["reset", 0]);
  return animationsArray;
};

export default createSelectionSortAnimations;

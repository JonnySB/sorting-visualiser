const createBubbleSortAnimations = (array) => {
  const animationsArray = [];
  let arrayLength = array.length;
  let temp = [];

  for (let i = 0; i < arrayLength - 1; i++) {
    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        animationsArray.push([[j, j + 1], true]);
        animationsArray.push([[j, j + 1], true]);
        animationsArray.push([[j, j + 1], true]);
      } else {
        animationsArray.push([[j, j + 1], false]);
        animationsArray.push([[j, j + 1], false]);
        animationsArray.push([[j, j + 1], false]);
      }
    }
  }
  return animationsArray;
};
export default createBubbleSortAnimations;

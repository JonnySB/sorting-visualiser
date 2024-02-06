const createInsertionSortAnimations = (array) => {
  const animationsArray = [];
  let i;
  let key;
  let j;

  for (i = 1; i < array.length; i++) {
    key = array[i];
    j = i - 1;

    while (j >= 0 && array[j] > key) {
      let targetIdx = j + 1;
      let value = array[j];
      animationsArray.push(["setHeight", [targetIdx, value]]);
      array[j + 1] = array[j];
      j = j - 1;
    }
    let targetIdx = j + 1;
    let value = key;
    animationsArray.push(["setHeight", [targetIdx, value]]);
    array[j + 1] = key;
  }
  return animationsArray;
};
export default createInsertionSortAnimations;

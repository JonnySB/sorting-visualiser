const playInsertionSortAnimations = (
  annimationsArray,
  arrayBars,
  animationSpeedMS,
  colours,
) => {
  const timeoutIDs = [];
  for (let i = 0; i < annimationsArray.length; i++) {
    let [operation, payload] = annimationsArray[i];

    // reset bars ready to be searched after each loop
    if (operation === "setHeight") {
      let [target, value] = payload;
      timeoutIDs.push(
        setTimeout(() => {
          const arrayBarStyle = arrayBars[target].style;
          arrayBarStyle.height = `${value}%`;
        }, i * animationSpeedMS),
      );
    }
  }
  return timeoutIDs;
};

export default playInsertionSortAnimations;

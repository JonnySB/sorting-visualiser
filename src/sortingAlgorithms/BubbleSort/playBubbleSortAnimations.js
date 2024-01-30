import changeBarColours from "../../helperMethods/changeBarColours";
import swapBarHeights from "../../helperMethods/swapBarHeights";

const playBubbleSortAnimations = (
  annimationsArray,
  arrayBars,
  animationSpeedMS,
  colours,
) => {
  const timeoutIds = [];
  for (let i = 0; i < annimationsArray.length; i++) {
    const [[i1, i2], swap] = annimationsArray[i];
    const barOneStyle = arrayBars[i1].style;
    const barTwoStyle = arrayBars[i2].style;

    // unpacking triplets for conditionals below. (else, or i%3===2, is colour
    // cleanup)
    const isColourChange = i % 3 === 0;
    const isSwap = i % 3 === 1;

    if (isColourChange) {
      if (swap) {
        // IF-SWAPPING - highlight in SWAP_COLOR_HEX
        timeoutIds.push(
          setTimeout(() => {
            changeBarColours(barOneStyle, barTwoStyle, colours.SWAP_COLOR_HEX);
          }, i * animationSpeedMS),
        );
      } else {
        // IF-NOT-SWAPPING - highlight in NO_SWAP_COLOR_HEX
        timeoutIds.push(
          setTimeout(() => {
            changeBarColours(
              barOneStyle,
              barTwoStyle,
              colours.NO_SWAP_COLOR_HEX,
            );
          }, i * animationSpeedMS),
        );
      }
    } else if (isSwap) {
      if (swap) {
        // IF-SWAPPING - highlight in SWAP_COLOR_HEX and swap
        timeoutIds.push(
          setTimeout(() => {
            swapBarHeights(barOneStyle, barTwoStyle);
          }, i * animationSpeedMS),
        );
      } else {
        timeoutIds.push(setTimeout(() => {}, i * animationSpeedMS));
      }
    } else {
      // POST-SWAP - clean up colours back to BASE_COLOR_HEX
      timeoutIds.push(
        setTimeout(() => {
          changeBarColours(barOneStyle, barTwoStyle, colours.BASE_COLOR_HEX);
        }, i * animationSpeedMS),
      );
    }
  }
  return timeoutIds;
};

export default playBubbleSortAnimations;

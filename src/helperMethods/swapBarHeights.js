export default function swapBarHeights(barOneStyle, barTwoStyle) {
  const tempHeight = barOneStyle.height;
  barOneStyle.height = barTwoStyle.height;
  barTwoStyle.height = tempHeight;
}

// Get random number between 1-100:
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// Calculate margin width to add as a css property on the graphBars
const calculateMarginWidth = (numCols) => {
  return 2;
};

const createGraphBars = (numCols) => {
  const graphBars = [];

  const marginWidth = calculateMarginWidth(numCols);

  for (let i = 0; i < numCols; i++) {
    graphBars.push({
      height: getRandomNumber(),
      marginWidth: marginWidth,
    });
  }

  return graphBars;
};

export default createGraphBars;

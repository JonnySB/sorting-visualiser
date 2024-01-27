import React, { useState, useEffect } from "react";
import "./SortingVisualiser.css";

const SortingVisualiser = () => {
  const [sortingArray, setSortingArray] = useState([]);

  // Generate an array of length arrayLength:
  const generateSortingArray = () => {
    const tempArray = [];
    for (let i = 0; i < 100; i++) {
      tempArray.push(generateRandomIntFromInterval(5, 1000));
    }
    setSortingArray(tempArray);
  };

  useEffect(() => {
    generateSortingArray();
  }, []);

  return (
    <div className="array-container">
      {sortingArray.map((height, idx) => {
        return (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${height}px` }}
          >
            {height}
          </div>
        );
      })}
    </div>
  );
};

// generate random number
const generateRandomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualiser;

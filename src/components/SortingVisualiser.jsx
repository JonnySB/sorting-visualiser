import React, { useState, useEffect } from "react";
import ArrayBar from "./ArrayBar";
import "./SortingVisualiser.css";

const SortingVisualiser = () => {
  const [sortingArray, setSortingArray] = useState([]);

  // Generate an array of length arrayLength:
  const generateSortingArray = () => {
    const tempArray = [];
    for (let i = 0; i < 50; i++) {
      // Add an integer between 1-100 to the tempArray
      tempArray.push(Math.floor(Math.random() * 101) + 1);
    }
    setSortingArray(tempArray);
  };

  // Generate new array on page reload
  useEffect(() => {
    generateSortingArray();
  }, []);

  return (
    <div className="array-container">
      {sortingArray.map((height, index) => {
        return <ArrayBar height={height} index={index} />;
      })}
    </div>
  );
};

export default SortingVisualiser;

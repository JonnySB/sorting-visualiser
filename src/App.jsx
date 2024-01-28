import React, { useState } from "react";
import "./App.css";
import SortingVisualiser from "./components/SortingVisualiser";
import SortingControls from "./components/SortingControls";

function App() {
  const [arraySize, setArraySize] = useState(30);
  const [animationSpeedMS, setAnimationSpeedMS] = useState(50);
  const [resetArrayTrigger, setResetArrayTrigger] = useState(false);
  const [bubbleSortTrigger, setBubbleSortTrigger] = useState(false);

  return (
    <div className="App">
      <SortingVisualiser
        arraySize={arraySize}
        animationSpeedMS={animationSpeedMS}
        resetArrayTrigger={resetArrayTrigger}
        bubbleSortTrigger={bubbleSortTrigger}
      />
      <SortingControls
        // Set Array Size
        arraySizeState={{ arraySize: arraySize, setArraySize: setArraySize }}
        // Set Animation Speed
        animationSpeedMSState={{
          animationSpeedMS: animationSpeedMS,
          setAnimationSpeedMS: setAnimationSpeedMS,
        }}
        // Trigger Regenerate Array Button
        resetArrayButtonNameAndState={{
          buttonName: "Reset Array",
          state: resetArrayTrigger,
          setState: setResetArrayTrigger,
        }}
        // Trigger Bubble Sort Button
        bubbleSortButtonNameAndState={{
          buttonName: "Bubble Sort",
          state: bubbleSortTrigger,
          setState: setBubbleSortTrigger,
        }}
      />
    </div>
  );
}

export default App;

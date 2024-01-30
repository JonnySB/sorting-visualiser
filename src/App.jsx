import React, { useState } from "react";
import "./App.css";
import SortingVisualiser from "./components/SortingVisualiser/SortingVisualiser";
import SortingControls from "./components/SortingControls/SortingControls";

function App() {
  const [arraySize, setArraySize] = useState(30);
  const [animationSpeedMS, setAnimationSpeedMS] = useState(150);
  const [resetArrayTrigger, setResetArrayTrigger] = useState(false);
  const [cancelAnimationTrigger, setCancelAnimationTrigger] = useState(false);
  const [bubbleSortTrigger, setBubbleSortTrigger] = useState(false);

  return (
    <div className="App">
      <div className="top-spacer"></div>
      <SortingVisualiser
        arraySize={arraySize}
        animationSpeedMS={animationSpeedMS}
        resetArrayTrigger={resetArrayTrigger}
        bubbleSortTrigger={bubbleSortTrigger}
        cancelAnimationTrigger={cancelAnimationTrigger}
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
        // Cancel animation
        cancelAnimationButtonNameAndState={{
          buttonName: "Cancel Animation",
          state: cancelAnimationTrigger,
          setState: setCancelAnimationTrigger,
          className: "cancel-animation",
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

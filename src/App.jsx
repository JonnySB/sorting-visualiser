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
  const [selectionSortTrigger, setSelectionSortTrigger] = useState(false);
  const [insertionSortTrigger, setInsertionSortTrigger] = useState(false);

  return (
    <div className="App">
      <div className="top-spacer"></div>
      <SortingVisualiser
        arraySize={arraySize}
        animationSpeedMS={animationSpeedMS}
        resetArrayTrigger={resetArrayTrigger}
        cancelAnimationTrigger={cancelAnimationTrigger}
        bubbleSortTrigger={bubbleSortTrigger}
        selectionSortTrigger={selectionSortTrigger}
        insertionSortTrigger={insertionSortTrigger}
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
        // Cancel animation button
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
        // Trigger Selection Sort Button
        selectionSortButtonNameAndState={{
          buttonName: "Selection Sort",
          state: selectionSortTrigger,
          setState: setSelectionSortTrigger,
        }}
        // Trigger Insertion Sort Button
        insertionSortButtonNameAndState={{
          buttonName: "Insertion Sort",
          state: insertionSortTrigger,
          setState: setInsertionSortTrigger,
        }}
      />
    </div>
  );
}

export default App;

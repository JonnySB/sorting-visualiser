import React, { useState } from "react";
import "./App.css";
import SortingVisualiser from "./components/SortingVisualiser";
import SortingControls from "./components/SortingControls";

function App() {
  const [resetArrayTrigger, setResetArrayTrigger] = useState(false);
  const [bubbleSortTrigger, setBubbleSortTrigger] = useState(false);

  return (
    <div className="App">
      <SortingVisualiser
        resetArrayTrigger={resetArrayTrigger}
        bubbleSortTrigger={bubbleSortTrigger}
      />
      <SortingControls
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

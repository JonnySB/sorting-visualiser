import React from "react";
import "./App.css";
import SortingVisualiser from "./components/SortingVisualiser";
import SortingControls from "./components/SortingControls";

function App() {
  return (
    <div className="App">
      <SortingVisualiser />
      <SortingControls />
    </div>
  );
}

export default App;

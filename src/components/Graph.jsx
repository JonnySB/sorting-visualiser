import React from "react";
import GraphBar from "./GraphBar";
import "./Graph.css";

const Graph = (props) => {
  return (
    <div className="graph-container">
      <div className="graph">
        {props.graphBars.map((graphBar) => (
          <GraphBar graphBar={graphBar} />
        ))}
      </div>
    </div>
  );
};

export default Graph;

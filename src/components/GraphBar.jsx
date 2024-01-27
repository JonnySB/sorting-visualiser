import React from "react";
import "./GraphBar.css";

const GraphBar = (props) => {
  const divStyle = {
    display: "inline-block",
    background: "teal",
    width: "10" + "vh",
    height: String(props.graphBar.height) + "vh",
    margin: String(props.graphBar.marginWidth) + "px",
  };

  return <div className="graph-bar" style={divStyle}></div>;
};

export default GraphBar;

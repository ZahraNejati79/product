import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
  "div",
  { id: "element", className: "element" },
  "this is product app"
);

ReactDOM.render(element, document.getElementById("root"));

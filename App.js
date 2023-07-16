import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "headingTag" },
  React.createElement("h2", { id: "headingTag" }, "New react Series")
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

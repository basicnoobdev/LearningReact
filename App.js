const heading = React.createElement(
  "h1",
  { id: "headingTag" },
  React.createElement("h2", { id: "headingTag" }, "this is hello from React")
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

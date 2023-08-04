import React from "react";
import ReactDOM from "react-dom/client";

const jsvariable = 245;
const HeadingComponent = () => {
  return (
    <h1 id="headingTag" tabIndex="5">
      Heading : Namastey React
    </h1>
  );
};

const FooterComponent = () => {
  return (
    <h1 id="FooterTag" tabIndex="5">
      Footer : Done by MT
    </h1>
  );
};

const ApplicationComponent = () => {
  return (
    <div>
      <HeadingComponent />
      <FooterComponent />
      <h1>{jsvariable}</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplicationComponent />);

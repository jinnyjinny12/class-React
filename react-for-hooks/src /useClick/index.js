import React from "react";
import ReactDOM from "react-dom";
import useClick from "./useClick";

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick();

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

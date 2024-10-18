import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";

const useFadeIn = (duration = 1) => {
  if (typeof duration !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

function App() {
  const fadInH1 = useFadeIn(2);
  const fadeInP = useFadeIn(5);
  const el = useFadeIn();
  return (
    <div className="App">
      <h1 {...fadInH1}>Hi</h1>
      <p {...fadeInP}> lalala happy morning </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

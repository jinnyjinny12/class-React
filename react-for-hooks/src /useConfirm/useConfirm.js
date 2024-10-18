import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }

  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

function App() {
  const abort = () => console.log("Aborted");
  const deleteWorld = () => console.log("Deleting the world");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={confirmDelete}> Delete the world</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

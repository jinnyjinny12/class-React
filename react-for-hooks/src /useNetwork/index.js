import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    const handleNetworkChange = (online) => {
      console.log(online ? "We just went online" : "We are offline");
    };

    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

function App() {
  const onLine = useNetwork();
  return (
    <div className="App">
      <h1>{onLine ? "OnLine" : "OffLine"}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

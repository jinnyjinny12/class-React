import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  // console.log(
  //   `Loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  // );

  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

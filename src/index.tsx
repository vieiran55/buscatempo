import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import  Router  from "./routes";

console.log(process.env.REACT_APP_API_KEY);


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
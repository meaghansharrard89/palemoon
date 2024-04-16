import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

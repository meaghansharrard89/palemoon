import React from "react";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

window.addEventListener("load", function () {
  const elementsToFadeIn = document.querySelectorAll(".fade-in");
  elementsToFadeIn.forEach((element) => {
    element.classList.add("fade-in-animation");
  });
});

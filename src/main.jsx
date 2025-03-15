import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../responsive.css";
import SmoothScrolling from "./components/smoothScroll/SmoothScroll.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SmoothScrolling>
      <App />
    </SmoothScrolling>
  </React.StrictMode>
);

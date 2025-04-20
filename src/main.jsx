import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../responsive.css";
import LenisScroll from "./components/LenisScroll.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LenisScroll>
      <App />
    </LenisScroll>
  </React.StrictMode>
);

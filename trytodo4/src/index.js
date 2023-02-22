import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalInfo } from "./GlobalInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <GlobalInfo>
    <App />
  </GlobalInfo>

);

reportWebVitals();
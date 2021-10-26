import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import RouteMain from "./RouteMain";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <RouteMain />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

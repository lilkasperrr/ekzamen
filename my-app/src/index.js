import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";

import "./styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

const app = document.getElementById("root");
const root = createRoot(app);

root.render(
  <Router>
    <App />
  </Router>
);

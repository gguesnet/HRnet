import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

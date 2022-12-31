import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/addField";
import View from "./Pages/viewSurvey";
import Success from "./Pages/successfull";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Manage from "./Pages/manageSurveys";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/view" element={<View />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/table" element={<Manage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

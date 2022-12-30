import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/addField";
import View from "./Pages/viewSurvey";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

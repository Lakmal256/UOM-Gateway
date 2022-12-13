import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./Pages/HomePage";
import PaymentsPage from "./Pages/PaymentsPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/paymentspage" element={<PaymentsPage/>} />
    </Routes>
  </BrowserRouter>
    
    
  </React.StrictMode>
);

reportWebVitals();

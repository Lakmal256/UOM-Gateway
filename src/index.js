import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Paymentheader from "./Components/Paymentheader";
import PaymentsPage from "./Pages/PaymentsPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Paymentheader />} />
      <Route exact path="/paymentspage" element={<PaymentsPage/>} />
    </Routes>
  </BrowserRouter>
    
    
  </React.StrictMode>
);

reportWebVitals();

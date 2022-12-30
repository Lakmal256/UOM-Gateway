import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import HomePage from "./Pages/HomePage";
// import PaymentsPage from "./Pages/PaymentsPage";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./AddField";
import View from "./viewsurvey";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<HomePage />} />
//         <Route path="/app/*" element={<PaymentsPage />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

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

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import LaunchInfoPage from "./pages/LaunchInfoPage.tsx";
import AllRockets from "./pages/AllRockets.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/launch/:id" element={<LaunchInfoPage />} />
        <Route path="/allRockets" element={<AllRockets />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

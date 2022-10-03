import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/Login/index"
import RegisterPage from "../Pages/Register/index"
import HomePage from "../Pages/Home/index";
import NotFound from "../Pages/NotFound/index";


export default function RoutePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}


/* <Route path="/login" element={<LoginPage />} /> */
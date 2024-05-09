import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import AuthPage from "./AuthPage";
import PetPage from "./PetPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<AuthPage />} />
    <Route path="/pet/:name" element={<PetPage />} />
  </Routes>
);

export default AppRoutes;

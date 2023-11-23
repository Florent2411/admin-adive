import { ForgotPasswordPage, LoginPage, RegisterPage } from "../pages";

import React from "react";
import { Route, Routes } from "react-router-dom";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route exact path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
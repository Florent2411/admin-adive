import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import ForgotPasswordPage from '../pages/Auth/ForgotPasswordPage';
import DashboardPage from '../pages/DashboardPage';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import CreateCvPage from '../pages/CreateCvPage';
import JobsPage from '../pages/JobsPage';
import JobDetailsPage from '../pages/JobDetailsPage';

function Routers() {

  const isAuthenticated = false;
  console.log(!isAuthenticated)

  return (
    <BrowserRouter>
      {
        !isAuthenticated && <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      }
      {
        !isAuthenticated &&
        <div>
          <Header />
          <Sidebar />
          <div className="wrapper">
            <Routes>
              <Route exact path="/dashboard" element={<DashboardPage />} />
              <Route exact path="/create-cv" element={<CreateCvPage />} />
              <Route exact path="/jobs" element={<JobsPage />} />
              <Route exact path="/job-details/:id" element={<JobDetailsPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      }
    </BrowserRouter>
  );
}

export default Routers;
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ForgotPasswordPage from '../pages/Auth/ForgotPasswordPage';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import CertificationCenter from '../pages/CertificationCenter';
import CertificationTest from '../pages/CertificationTest';
import CertificationTestResult from '../pages/CertificationTestResult';
import CreateCvPage from '../pages/CreateCvPage';
import MyCVsPage from '../pages/MyCVsPage';
import DashboardPage from '../pages/DashboardPage';
import JobDetailsPage from '../pages/JobDetailsPage';
import JobsPage from '../pages/JobsPage';
import TrainingDetailsPage from '../pages/TrainingDetailsPage';
import TrainingsPage from '../pages/TrainingsPage';
import { useSelector } from 'react-redux';

function Routers() {
  const token = useSelector((state) => state.auth.token);

  return (
    <BrowserRouter>
      {
        !token ? (
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
          </Routes>
        ) : (
          <>
            <Header />
            <Sidebar />
            <div className="wrapper">
              <Routes>
                <Route exact path="/dashboard" element={<DashboardPage />} />
                <Route exact path="/create-cv" element={<CreateCvPage />} />
                <Route exact path="/my-cvs" element={<MyCVsPage />} />
                <Route exact path="/jobs" element={<JobsPage />} />
                <Route exact path="/job-details/:id" element={<JobDetailsPage />} />
                <Route exact path="/trainings" element={<TrainingsPage />} />
                <Route exact path="/training-details/:id" element={<TrainingDetailsPage />} />
                <Route exact path="/certification-center" element={<CertificationCenter />} />
                <Route exact path="/certification-test" element={<CertificationTest />} />
                <Route exact path="/certification-test-result" element={<CertificationTestResult />} />
              </Routes>
              <Footer />
            </div>
          </>
        )

      }
    </BrowserRouter >
  )
}

export default Routers;
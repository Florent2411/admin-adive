import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import {
  CertificationCenter, CertificationTest,
  CertificationTestResult, CreateCvPage,
  DashboardPage, FormationDetailsPage,
  FormationsPage, JobDetailsPage, JobsPage,
  MyCVsPage, SetupAccountPage
} from "../pages";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ height: "100vh" }} className="wrapper">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default function PrivateRoutes() {
  const { user } = useSelector((state) => state.auth);
  const isAccountSetup = user.isAccountSetup;

  return (
    <>
      {
        isAccountSetup ? (
          <Layout>
            <Routes>
              <Route exact path="/dashboard" element={<DashboardPage />} />
              <Route exact path="/create-cv" element={<CreateCvPage />} />
              <Route exact path="/my-cvs" element={<MyCVsPage />} />
              <Route exact path="/jobs" element={<JobsPage />} />
              <Route exact path="/job-details/:id" element={<JobDetailsPage />} />
              <Route exact path="/formations" element={<FormationsPage />} />
              <Route exact path="/formation-details/:id" element={<FormationDetailsPage />} />
              <Route exact path="/certification-center" element={<CertificationCenter />} />
              <Route exact path="/certification-test" element={<CertificationTest />} />
              <Route exact path="/certification-test-result" element={<CertificationTestResult />} />
            </Routes>
          </Layout>
        ) : (
          <Routes location="/setup-account">
            <Route exact path="/setup-account" element={<SetupAccountPage />} />
          </Routes>
        )
      }

    </>

  )
}

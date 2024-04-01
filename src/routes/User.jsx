import { Suspense } from "react";
import LazyLoader from "../components/others/LazyLoader";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import withAuth from "../components/auth/withAuth";
import UserHeader from "../components/headers/UserHeader";

const ProtectedDashboard = withAuth(Dashboard);

const User = () => {
  return (
    <div className="font-body flex flex-col min-h-screen inset-0 bg-secondary-dark">
      <UserHeader/>
      <Suspense fallback={<LazyLoader />}>
        <Routes>
          <Route path="dashboard" element={<ProtectedDashboard />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default User;

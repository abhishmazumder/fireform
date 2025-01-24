import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LazyLoader from "./components/others/LazyLoader";

import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Help from "./pages/Help";
import Docs from "./pages/Docs";
import Legal from "./pages/Legal";
import License from "./components/legal/License";
import Privacy from "./components/legal/Privacy";
import Terms from "./components/legal/Terms";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<Help />} />
          <Route path="docs" element={<Docs />} />
          <Route path="legal" element={<Legal />}>
            <Route path="license" element={<License />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Route>
        <Route path="auth/*" element={<AuthLayout />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="dashboard/*" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
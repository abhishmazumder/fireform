import { Link, Route, Routes, useNavigate } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import LazyLoader from "../components/others/LazyLoader";
const SignUp = React.lazy(() => import("../pages/SignUp"));
const Login = React.lazy(() => import("../pages/Login"));

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

const Auth = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/user/dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="font-body p-4 h-screen flex flex-col">
      <Link className="hover:underline pb-8 md:pb-4 lg:pb-2" to={"/"}>
        Back to home
      </Link>
      <div className="self-center flex items-center max-w-4xl flex-grow">
        <Suspense fallback={<LazyLoader />}>
          <Routes>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Auth;

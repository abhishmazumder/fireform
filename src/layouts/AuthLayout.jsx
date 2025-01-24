import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const AuthLayout = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  return (
    <div className="font-body p-4 h-screen flex flex-col">
      <Link className="hover:underline pb-8 md:pb-4 lg:pb-2" to={"/"}>
        Back to home
      </Link>
      <div className="self-center flex items-center max-w-4xl flex-grow">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

const Auth = () => {
  return (
    <div className="font-body p-4 h-screen flex flex-col">
      <Link className="hover:underline pb-8 md:pb-4 lg:pb-2" to={"/"}>
        Back to home
      </Link>
      <div className="self-center flex items-center max-w-4xl flex-grow">
        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default Auth;

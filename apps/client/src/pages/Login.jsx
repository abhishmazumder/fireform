import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import Logo from "../assets/logo-black-text.svg?react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Mail from "../assets/mail.svg?react";
import EyeOpen from "../assets/eye-open.svg?react";
import EyeClose from "../assets/eye-close.svg?react";

import { Link } from "react-router-dom";
import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase/firebase";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    logInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="pt-8 px-4 pb-4">
      <div className="mb-6">
        <Logo />
      </div>
      <div>
        <div className="flex items-center justify-between space-x-3">
          <button
            className="flex-grow px-4 py-2 border flex gap-2 rounded border-slate-200  hover:border-primary-light"
            onClick={signInWithGoogle}
          >
            <FcGoogle className="size-6" />
            <span>Login with Google</span>
          </button>
          <button className="flex-grow px-4 py-2 border flex gap-2 rounded border-slate-200  hover:border-primary-light">
            <FaGithub className="size-6" />
            <span>Login with GitHub</span>
          </button>
        </div>
      </div>
      <div className="relative flex py-4 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-3 text-gray-400 text-sm">
          or login with email
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="space-y-5">
          <div>
            <div className="relative flex items-center">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "You must enter your email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="email"
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-primary"
                      placeholder="Enter email"
                      autoComplete="false"
                    />
                    <span className="absolute right-3">
                      <Mail />
                    </span>
                  </>
                )}
              />
            </div>
            {errors.email && (
              <p className="text-error text-xs pt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <div className="relative flex items-center">
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "You must enter your password",
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-primary"
                      placeholder="Enter password"
                      autoComplete="false"
                    />
                    <span
                      className="absolute right-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOpen /> : <EyeClose />}
                    </span>
                  </>
                )}
              />
            </div>
            {errors.password && (
              <p className="text-error text-xs pt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-primary hover:bg-primary-dark focus:outline-none"
          >
            Login
          </button>
        </div>
        <p className="text-sm mt-6 text-center">
          Don&apos;t have a account?{" "}
          <Link
            className="text-primary font-semibold hover:underline ml-1"
            to={"/auth/signup"}
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

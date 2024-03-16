import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Logo from "../assets/logo-no-background.svg?react";
import Google from "../assets/google.svg?react";
import GitHub from "../assets/github.svg?react";
import Person from "../assets/person.svg?react";
import Mail from "../assets/mail.svg?react";
import EyeOpen from "../assets/eye-open.svg?react";
import EyeClose from "../assets/eye-close.svg?react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="grid md:grid-cols-5 items-center shadow-2xl rounded-xl overflow-hidden">
      <div className="h-full hidden md:flex flex-col justify-center space-y-16 p-4 bg-gradient-to-r from-secondary-light to-secondary-dark col-span-2">
        <div>
          <h4 className="text-white text-lg font-semibold">
            Easy Form Collection
          </h4>
          <p className="text-sm text-white mt-2">
            No backend coding required, just seamless collection of submissions{" "}
          </p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">
            Unified Dashboard
          </h4>
          <p className="text-sm text-white mt-2">
            Centralize form submissions for effortless management and analysis,
            saving you time{" "}
          </p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">
            Free, Unlimited Usage
          </h4>
          <p className="text-sm text-white mt-2">
            No limits, no cost—just effortless form management{" "}
          </p>
        </div>
      </div>
      <div className="pt-8 px-4 pb-4 col-span-3">
        <div className="mb-6">
          <Logo />
        </div>
        <div>
          <div className="flex items-center justify-between space-x-3">
            <button className="flex-grow px-4 py-2 border flex gap-2 rounded border-slate-200  hover:border-primary-light">
              <Google />
              <span>Signup with Google</span>
            </button>
            <button className="flex-grow px-4 py-2 border flex gap-2 rounded border-slate-200  hover:border-primary-light">
              <GitHub />
              <span>Signup with GitHub</span>
            </button>
          </div>
        </div>
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="space-y-5">
            <div>
              <div className="relative flex items-center">
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: "You must enter your name" }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        type="text"
                        className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-primary"
                        placeholder="Enter name"
                        autoComplete="false"
                      />

                      <span className="absolute right-3">
                        <Person />
                      </span>
                    </>
                  )}
                />
              </div>
              {errors.name && (
                <p className="text-error text-xs pt-1">{errors.name.message}</p>
              )}
            </div>
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
                <p className="text-error text-xs pt-1">
                  {errors.email.message}
                </p>
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
                    minLength: {
                      value: 8,
                      message:
                        "Your password must be at least 8 characters long",
                    },
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
            <div className="flex items-center">
              <input
                id="tnc"
                name="tnc"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-primary focus:ring-primary-light border-primary-light rounded"
              />
              <label htmlFor="tnc" className="ml-3 block text-sm">
                I accept the{" "}
                <a className="text-primary font-semibold hover:underline ml-1">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-primary hover:bg-primary-dark focus:outline-none"
            >
              Create an account
            </button>
          </div>
          <p className="text-sm mt-6 text-center">
            Already have an account?{" "}
            <a className="text-primary font-semibold hover:underline ml-1">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default SignUp;

import { useForm, Controller } from "react-hook-form";
import LinkedIn from "../../assets/linkedin.svg?react";
import X from "../../assets/x.svg?react";
import GitHub from "../../assets/github-white.svg?react";
import Web from "../../assets/web.svg?react";
import Logo from "../../assets/logo-white-text.svg?react";
import { Link } from "react-router-dom";
import { memo } from "react";

const Footer = memo(() => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full flex flex-col px-6 space-y-6 py-6 text-white bg-black">
      <div className="w-full flex flex-col  md:flex-row gap-3">
        <div className="w-full md:w-2/5 flex flex-col justify-start gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl">Contact</h1>
          </div>
          <div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. or sit
              amet, consectetur adipiscing elit
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="space-y-2">
                <div>
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
                      <input
                        {...field}
                        type="email"
                        className="bg-transparent text-white border border-white w-full text-sm px-4 py-2 rounded-md outline-white"
                        placeholder="Enter email"
                        autoComplete="false"
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-error text-xs pt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "You must enter something",
                      minLength: {
                        value: 4,
                        message: "You have to enter atleast 4 characters",
                      },
                      maxLength: {
                        value: 250,
                        message: "You can enter atmost 250 characters",
                      },
                    }}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className="bg-transparent text-white border border-white w-full text-sm px-4 py-2 rounded-md outline-white"
                        placeholder="Enter message (4-250 characters)"
                        autoComplete="false"
                      />
                    )}
                  />
                  {errors.message && (
                    <p className="text-error text-xs pt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div className="flex justify-start">
                  <button className="px-3 py-2 bg-secondary rounded-md text-primary hover:bg-secondary-dark transition-all">
                    <p className="text-sm">Submit</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full md:w-3/5 flex flex-col items-end gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">About us</h2>
          </div>
          <div className="max-w-full md:max-w-sm lg:max-w-lg">
            <p className="text-sm text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              scelerisque dui non est lobortis sollicitudin. Curabitur
              vestibulum tristique sem, ut posuere quam laoreet sit amet. Nulla
              sit amet mauris egestas, porttitor arcu id, porta nulla.
            </p>
          </div>
          <div className="my-auto flex flex-row justify-end gap-8">
            <a href={"https:/abhishekmazumder.com"} target="_blank">
              <Web />
            </a>
            <a href={"https://github.com/abhimazumder"} target="_blank">
              <GitHub />
            </a>
            <a href={"www.linkedin.com/in/abhish-mazumder"} target="_blank">
              <LinkedIn />
            </a>
            <a href={"https://twitter.com/abhish_mazumder"} target="_blank">
              <X />
            </a>
          </div>
          <div className="mt-auto self-start md:self-end">
            <Logo />
          </div>
        </div>
      </div>
      <div>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-y-6 text-sm font-light">
        <div className="w-full flex flex-row justify-between md:justify-end gap-6">
          <Link className=" hover:underline transition-all">
            <p>Source Code</p>
          </Link>
          <Link className="hover:underline transition-all">
            <p>License</p>
          </Link>
          <Link className="hover:underline transition-all">
            <p>Terms and Conditions</p>
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <p>Copyright © 2024 Abhishek Mazumder</p>
        </div>
      </div>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;

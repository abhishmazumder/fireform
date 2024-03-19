import { Link } from "react-router-dom";
import Snippet from "../components/Home/Snippet";
import { GoArrowRight } from "react-icons/go";
import {
  SiHtml5,
  SiReact,
  SiAngular,
  SiJquery,
  SiNextdotjs,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="px-6 flex flex-col mt-3 gap-y-20 md:gap-y-32">
      <div className="flex flex-col gap-y-12 md:gap-y-10 items-center">
        <div className="w-full md:w-4/5 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-white">
            <span>Ditch the backend,</span> <br />
            <span className="bg-gradient-to-r from-tertiary to-primary bg-clip-text text-transparent">
              ignite
            </span>{" "}
            <span>your forms!</span>
          </h1>
        </div>
        <div className="w-full md:w-4/5 lg:w-2/3">
          <p className="text-md md:text-lg leading-2 md:leading-6 font-light text-center text-neutral-300">
            fireform takes the hassle out of the equation. Build forms with
            ease, manage all submissions in one central hub, and gain valuable
            insights. No coding or server headaches required!
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Snippet />
        </div>
        <div className="flex justify-between space-x-6">
          <Link to={"/auth/signup"}>
            <button className="w-auto px-3 py-2  rounded-md bg-primary text-white hover:bg-primary-dark transition-all">
              <p className="text-lg">Create a form</p>
            </button>
          </Link>
          <Link to={"/docs"}>
            <button className="w-auto px-3 py-2 rounded-md flex flex-row items-center gap-x-1 text-primary font-medium hover:underline transition-all">
              <p className="text-lg">Learn how</p>
              <GoArrowRight className=" size-6" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-12 md:gap-y-10 items-center">
        <div className="w-full md:w-4/5 lg:w-2/3">
          <h1 className="text-white text-center text-3xl font-bold">
            Super easy to integrate, no library, dependency needed.
          </h1>
        </div>
        <div className="w-full md:w-4/5 lg:w-2/3">
          <p className="text-md md:text-lg leading-2 md:leading-6 font-light text-center text-neutral-300">
            Form backend handling is not meant to be difficult. Getform gives
            you the possibility to integrate your HTML form with all the major
            development frameworks, JAMStack, no-code and CMS platforms.
          </p>
        </div>
        <div className="w-full md:w-4/5 lg:w-2/3">
          <p className="text-xs md:text-sm font-medium text-center text-neutral-300">
            Works with all frameworks and platforms
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-4/5 lg:w-3/5">
          <Link to={"/docs"}>
            <span className="h-10 md:h-14 lg:h-20 w-10 md:w-14 lg:w-20 rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
              <SiHtml5 className="opacity-75 size-10 md:size-12" />
            </span>
          </Link>
          <Link to={"/docs"}>
            <span className="h-10 md:h-14 lg:h-20 w-10 md:w-14 lg:w-20 rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
              <SiReact className="opacity-75 size-10 md:size-12" />
            </span>
          </Link>
          <Link to={"/docs"}>
            <span className="h-10 md:h-14 lg:h-20 w-10 md:w-14 lg:w-20 rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
              <SiAngular className="opacity-75 size-10 md:size-12" />
            </span>
          </Link>
          <Link to={"/docs"}>
            <span className="h-10 md:h-14 lg:h-20 w-10 md:w-14 lg:w-20 rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
              <SiJquery className="opacity-75 size-10 md:size-12" />
            </span>
          </Link>
          <Link to={"/docs"}>
            <span className="h-10 md:h-14 lg:h-20 w-10 md:w-14 lg:w-20 rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
              <SiNextdotjs className="opacity-75 size-10 md:size-12" />
            </span>
          </Link>
          <Link className="my-auto">
            <button className="w-auto flex flex-row items-center gap-x-1 text-primary-light font-medium hover:underline transition-all">
              <p className="text-sm md:text-lg">See more</p>
              <GoArrowRight className="size-4 md:size-6" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-12 md:gap-y-10">
        <div className="w-full self-center">
          <h1 className="text-white text-center text-3xl font-bold">
            Secure, easy to use with all essential features!
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  <div className="rounded-2xl p-3 bg-transparent border-primary-light border-2 hover:bottom-5">
    <div>
      Content
    </div>
    <div>
      Content
    </div>
    <div>
      Content
    </div>
  </div>
  <div className="rounded-2xl p-3 bg-transparent border-primary-light border-2">Content 2</div>
  <div className="rounded-2xl p-3 bg-transparent border-primary-light border-2">Content 3</div>
</div>

      </div>
    </div>
  );
};

export default Home;

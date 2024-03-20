import {
  SiHtml5,
  SiReact,
  SiAngular,
  SiJquery,
  SiNextdotjs,
} from "react-icons/si";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Frameworks = () => {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-10 items-center">
      <div className="w-full md:w-4/5 lg:w-2/3">
        <h1 className="text-white text-center text-3xl font-bold">
          Super easy to integrate, no library, dependency needed.
        </h1>
      </div>
      <div className="w-full md:w-4/5 lg:w-2/3">
        <p className="text-md md:text-lg leading-2 md:leading-6 font-light text-center text-neutral-300">
          Form backend handling is not meant to be difficult. Getform gives you
          the possibility to integrate your HTML form with all the major
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
          <span className="group h-auto w-auto rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
            <SiHtml5 className="size-10 md:size-12 transition-transform transform scale-100 group-hover:scale-75" />
          </span>
        </Link>
        <Link to={"/docs"}>
          <span className="group h-auto w-auto rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
            <SiReact className="size-10 md:size-12 transition-transform transform scale-100 group-hover:scale-75" />
          </span>
        </Link>
        <Link to={"/docs"}>
          <span className="group h-auto w-auto rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
            <SiAngular className="size-10 md:size-12 transition-transform transform scale-100 group-hover:scale-75" />
          </span>
        </Link>
        <Link to={"/docs"}>
          <span className="group h-auto w-auto rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
            <SiJquery className="size-10 md:size-12 transition-transform transform scale-100 group-hover:scale-75" />
          </span>
        </Link>
        <Link to={"/docs"}>
          <span className="group h-auto w-auto rounded-full p-[6px] md:p-2 flex justify-center items-center text-primary-light hover:bg-primary-light hover:text-white transition-all">
            <SiNextdotjs className="size-10 md:size-12 transition-transform transform scale-100 group-hover:scale-75" />
          </span>
        </Link>
        <Link className="my-auto">
          <button className="group w-auto flex flex-row items-center gap-x-1 text-primary-light font-medium">
            <div>
              <p className="text-sm md:text-lg">See more</p>
              <div className="bg-primary-light h-[2px] w-0 group-hover:w-full transition-all duration-150"></div>
            </div>
            <GoArrowRight className="size-4 md:size-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Frameworks;

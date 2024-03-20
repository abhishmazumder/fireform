import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import Snippet from './Snippet';


const Hero = () => {
  return (
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
            <button className="group w-auto px-3 py-2 rounded-md flex flex-row items-center gap-x-1 text-primary-light font-medium">
              <div>
              <p className="text-lg">Learn how</p>
              <div className="bg-primary-light h-[2px] w-0 group-hover:w-full transition-all duration-150"></div>
              </div>
              <GoArrowRight className=" size-6" />
            </button>
          </Link>
        </div>
      </div>
  )
}

export default Hero
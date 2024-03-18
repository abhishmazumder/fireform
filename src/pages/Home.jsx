import { Link } from "react-router-dom";
import Snippet from "../components/Home/Snippet";
import { GoArrowRight } from "react-icons/go";

const Home = () => {
  return (
    <div className="rounded-2xl px-6">
      <div className="min-h-80 flex flex-col space-y-8 items-center">
        <div className="w-4/5 md:w-2/3 text-secondary">
          <h1 className=" text-5xl md:text-7xl font-semibold text-center">
            <span>Ditch</span> <span>the</span> <span>backend,</span>
            <br />
            <span className="from-primary-dark to-primary bg-gradient-to-r bg-clip-text text-transparent">
              ignite
            </span>{" "}
            <span>your</span> <span>forms!</span>
          </h1>
        </div>
        <div className="w-4/5">
          <p className="text-md md:text-lg leading-2 md:leading-6 font-medium text-center text-neutral-400">
            <span>FireForm takes the hassle out of the equation.</span>
            <br />
            <span>
              Build forms with ease, manage all submissions in one central hub,
              and gain valuable insights.
            </span>
            <br />
            <span> No coding or server headaches required!</span>
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Snippet />
        </div>
        <div className="flex justify-between space-x-6">
          <Link to={"/auth/signup"}><button className="w-auto px-3 py-2  rounded-md bg-primary text-white hover:bg-primary-light transition-all">
            <p className="text-lg">Create a form</p>
          </button></Link>
          <Link to={"/docs"}>
          <button className="w-auto px-3 py-2 rounded-md flex flex-row items-center gap-x-1 text-primary font-medium">
            <p className="text-lg">Learn how</p>
            <GoArrowRight className=" size-6" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

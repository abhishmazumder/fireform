import { lazy } from "react";

import Hero from "../components/Home/Hero/Hero";
const Frameworks = lazy(() => import("../components/Home/Frameworks/Frameworks"));
const Features = lazy(() => import("../components/Home/Features/Features"));
const Steps = lazy(() => import("../components/Home/Steps/Steps"));
const Reviews = lazy(() => import("../components/Home/Reviews/Reviews"));

const Home = () => {
  return (
    <div className="px-6 flex flex-col mt-3 gap-y-20 md:gap-y-32">
      <Hero />
      <Frameworks />
      <Features />
      <Steps />
      <Reviews />
    </div>
  );
};

export default Home;

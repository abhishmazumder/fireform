import Hero from "../components/Home/Hero/Hero";
import Frameworks from "../components/Home/Frameworks/Frameworks";
import Features from "../components/Home/Features/Features";
import Steps from "../components/Home/Steps/Steps";
import Reviews from "../components/Home/Reviews/Reviews";
import EndCard from "../components/Home/EndCard/EndCard";

const Home = () => {
  return (
    <div className="flex flex-col mx-4 md:mx-12 my-6 gap-y-20 md:gap-y-32">
      <Hero />
      <Frameworks />
      <Features />
      <Steps />
      <Reviews />
      <EndCard/>
    </div>
  );
};

export default Home;

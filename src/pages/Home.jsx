import Hero from "../components/home/Hero/Hero";
import Frameworks from "../components/home/Frameworks/Frameworks";
import Features from "../components/home/Features/Features";
import Steps from "../components/home/Steps/Steps";
import Reviews from "../components/home/Reviews/Reviews";
import EndCard from "../components/home/EndCard/EndCard";

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

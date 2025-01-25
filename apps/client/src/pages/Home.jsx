import EndCard from "../components/home/EndCard";
import Features from "../components/home/Features";
import Frameworks from "../components/home/Frameworks";
import Hero from "../components/home/Hero";
import Reviews from "../components/home/Reviews";
import Steps from "../components/home/Steps";

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

import Hero from "../components/Home/Hero";
import Frameworks from "../components/Home/Frameworks";
import Features from "../components/Home/Features";
import Steps from "../components/Home/Steps";
import Reviews from "../components/Home/Reviews";

const Home = () => {
  return (
    <div className="px-6 flex flex-col mt-3 gap-y-20 md:gap-y-32">
      <Hero />
      <Frameworks />
      <Features />
      <Steps/>
      <Reviews/>
    </div>
  );
};

export default Home;

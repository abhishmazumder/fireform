import { Link } from "react-router-dom";
import Header from "../components/headers/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Link to={"/docs"}>docs</Link>
      <Link to={"/help"}>help</Link>
      <Link to={"/auth/signup"}>signup</Link>
    </div>
  );
};

export default Home;

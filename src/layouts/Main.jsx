import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Help = lazy(() => import("../pages/Help"));
const Docs = lazy(() => import("../pages/Docs"));

const Main = () => {
  return (
    <div className="font-body flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow pt-20">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Main;

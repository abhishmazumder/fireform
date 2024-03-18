import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";

const Home = lazy(() => import("../pages/Home"));
const Help = lazy(() => import("../pages/Help"));
const Docs = lazy(() => import("../pages/Docs"));
const Legal = lazy(() => import("../pages/Legal"));

const Main = () => {
  return (
    <div className="font-body flex flex-col min-h-screen inset-0 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-fixed">
      <Header />
      <div className="flex-grow container mx-auto my-6 inset-0 h-full w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/legal/*" element={<Legal/>}/>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Main;

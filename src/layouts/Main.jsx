import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "../components/headers/Header";
import Footer from "../components/footers/Footer";
import LazyLoader from "../components/others/LazyLoader";

const Home = lazy(() => import("../pages/Home"));
const Help = lazy(() => import("../pages/Help"));
const Docs = lazy(() => import("../pages/Docs"));
const Legal = lazy(() => import("../pages/Legal"));

const Main = () => {
  return (
    <div className="font-body flex flex-col min-h-screen inset-0 bg-secondary-dark bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] bg-fixed">
      <Header />
      <div className="flex-grow container mx-auto my-6 h-full w-full">
        <Suspense fallback={<LazyLoader/>}>
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

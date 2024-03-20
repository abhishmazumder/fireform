import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LazyLoader from "./components/others/LazyLoader";

const Main = lazy(() => import("./routes/Main"));
const Auth = lazy(() => import("./routes/Auth"));
const User = lazy(() => import("./routes/User"));

function App() {
  return (
    <Suspense fallback={<LazyLoader/>}>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Main />} />
      </Routes>
     </Suspense>
  );
}

export default App;

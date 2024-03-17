import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Main = lazy(() => import("./layouts/Main"));
const Auth = lazy(() => import("./layouts/Auth"));
const User = lazy(() => import("./layouts/User"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </Suspense>
  );
}

export default App;

import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./layouts/Home";
import Auth from "./layouts/Auth";
import User from "./layouts/User";

const App = () => {
  const routing = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/help", element: <Home /> },
    { path: "/docs", element: <Home /> },
    { path: "/auth/*", element: <Auth /> },
    { path: "/user", element: <User /> },
  ]);

  return routing;
};

export default App;

import AboutPage from "@pages/AboutPage";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '*', element: <NotFoundPage /> },
]

const AppRoutes = createBrowserRouter(routes);

export default AppRoutes;

import AboutPage from "@pages/AboutPage";
import AreaCalculation from "@pages/AreaCalculation";
import HomePage from "@pages/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import PerimeterCalculation from "@pages/PerimeterCalculation";
import UnderConstructionPage from "@pages/UnderConstruction";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/areas', element: <AreaCalculation /> },
  { path: '/perimeters', element: <PerimeterCalculation /> },
  { path: '/volumes', element: <UnderConstructionPage /> },
  { path: '/units', element: <UnderConstructionPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '*', element: <NotFoundPage /> },
]

const AppRoutes = createBrowserRouter(routes);

export default AppRoutes;

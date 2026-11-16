import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import MentionsLegales from "../pages/legal/MentionsLegales";
import Confidentialite from "../pages/legal/Confidentialite";
import Cookies from "../pages/legal/Cookies";
import ConditionsGenerales from "../pages/legal/ConditionsGenerales";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mentions-legales",
    element: <MentionsLegales />,
  },
  {
    path: "/confidentialite",
    element: <Confidentialite />,
  },
  {
    path: "/politique-de-confidentialite",
    element: <Confidentialite />,
  },
  {
    path: "/cookies",
    element: <Cookies />,
  },
  {
    path: "/conditions-generales-de-vente",
    element: <ConditionsGenerales />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
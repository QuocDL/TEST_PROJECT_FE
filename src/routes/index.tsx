import { RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";

const routes = PublicRoutes;

export default function AppRoutes() {
  return <RouterProvider router={routes} />;
}

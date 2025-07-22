import { RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";

export default function AppRoutes() {
  return <RouterProvider router={PublicRoutes} />;
}

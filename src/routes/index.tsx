import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([...PublicRoutes, ...PrivateRoutes]);

export default function AppRoutes() {
  return <RouterProvider router={routes} />;
}

import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../components/layouts/ClientLayout";
import HomePage from "../pages/home/HomePage";
import AuthPage from "../pages/auth/AuthPage";

const routes = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <AuthPage/>,
      },
      {
        path: "/register",
        element: <AuthPage/>,
      }
    ],
  },
];

export const PublicRoutes = createBrowserRouter(routes);

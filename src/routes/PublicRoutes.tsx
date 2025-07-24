import { createBrowserRouter } from "react-router-dom";
import ClientLayout from "../components/layouts/ClientLayout";
import HomePage from "../pages/home/HomePage";
import AuthPage from "../pages/auth/AuthPage";
import ProductDetail from "../pages/productDetail/ProductDetail";

const routes = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },{
        path: "productDetail",
        element: <ProductDetail />,
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

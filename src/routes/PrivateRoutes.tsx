import PrivateLayout from "../components/layouts/PrivateLayout";
import ProtectedPrivate from "../context/private/ProtectedPrivate";
import ListCategory from "../pages/admins/categories/ListCategory";
import Dashboard from "../pages/admins/dashboard/DashBoard";

const PrivateRoutes = [
  {
    path: "/admin",
    element: (
      <ProtectedPrivate>
      <PrivateLayout />
    </ProtectedPrivate>
    ),
    
    
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/admin/categories",
        element: <ListCategory />,
      },
    ],
  },
];

export default PrivateRoutes;

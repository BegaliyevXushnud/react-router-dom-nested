import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import AdminLayout from "./adminlayout";
import Cars from "./cars";
import AdminList from "./adminlist";
import UserLayout from "./userlayout";
import Products from "./products"; // To'g'ri import qilish
import UserList from "./UserList"; // To'g'ri import qilish
import ProtectedRoute from "./ProtectedRoute";

const Index = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          element: <ProtectedRoute element={AdminLayout} />,
          children: [
            { path: "admin-layout", element: <AdminLayout /> },
            { path: "cars", element: <Cars /> },
            { path: "admin-list", element: <AdminList /> },
          ],
        },
        {
          element: <ProtectedRoute element={UserLayout} />,
          children: [
            { path: "user-layout", element: <UserLayout /> },
            { path: "products", element: <Products /> },
            { path: "user-list", element: <UserList /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Index;

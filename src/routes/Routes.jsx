import Home from "@/Home/Home";
import MainLayout from "@/layouts/MainLayout";
import CreateSale from "@/pages/CreateSale";
import SaleHistory from "@/pages/SaleHistory";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-sale",
        element: <CreateSale />,
      },
      {
        path: "/sale-history",
        element: <SaleHistory />,
      },
    ],
  },
]);

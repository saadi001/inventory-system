import Home from "@/Home/Home";
import MainLayout from "@/layouts/MainLayout";
import AddProduct from "@/pages/AddProduct";
import CreateCustomer from "@/pages/CreateCustomer";
import CreateSale from "@/pages/CreateSale";
import CreateSupplier from "@/pages/CreateSupplier";
import ProductList from "@/pages/ProductList";
import SaleHistory from "@/pages/SaleHistory";
import SearchProduct from "@/pages/SearchProduct";
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
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/create-sale",
        element: <CreateSale />,
      },
      {
        path: "/sale-history",
        element: <SaleHistory />,
      },
      {
        path: "/search-product",
        element: <SearchProduct />,
      },
      {
        path: "/product-list",
        element: <ProductList />,
      },
      {
        path: "/create-supplier",
        element: <CreateSupplier />,
      },
      {
        path: "/create-customer",
        element: <CreateCustomer />,
      },
    ],
  },
]);

import { Database02Icon, UserGroupIcon, UserStar01Icon } from "hugeicons-react";
import { BanknoteArrowDown, Home } from "lucide-react";

export const SidebarMenu = [
  {
    section: "Dashboard",
    link: "/",
    icon: <Home size={20} strokeWidth={1.8} />,
  },
  {
    section: "Inventory",
    icon: <Database02Icon size={20} strokeWidth={1.8} />,
    menus: [
      { name: "Add Product", link: "add-product" },
      { name: "Search Product", link: "search-product" },
      { name: "Product List", link: "product-list" },
    ],
  },
  {
    section: "Sales Management",
    icon: <BanknoteArrowDown size={20} strokeWidth={1.8} />,
    menus: [
      { name: "Create Sale", link: "create-sale" },
      { name: "Sale History ", link: "sale-history" },
    ],
  },
  {
    section: "Suppliers",
    icon: <UserStar01Icon size={20} strokeWidth={1.8} />,
    menus: [
      { name: "Create Supplier", link: "create-supplier" },
      { name: "Supplier List ", link: "supplier-list" },
    ],
  },
  {
    section: "Customer",
    icon: <UserGroupIcon size={20} strokeWidth={1.8} />,
    menus: [
      { name: "Create Customer", link: "create-customer" },
      { name: "Customer List", link: "customer-list" },
    ],
  },
];

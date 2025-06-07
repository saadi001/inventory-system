import { BanknoteArrowDown, Home } from "lucide-react";

export const SidebarMenu = [
  {
    section: "Dashboard",
    link: "/",
    icon: <Home size={20} strokeWidth={1.8} />,
  },
  {
    section: "Sales Management",
    icon: <BanknoteArrowDown size={20} strokeWidth={1.8} />,
    menus: [
      { name: "Create Sale", link: "create-sale" },
      { name: "Sale History ", link: "sale-history" },
    ],
  },
];

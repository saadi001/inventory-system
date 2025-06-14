import { BankIcon, MasterCardIcon, Wallet01Icon } from "hugeicons-react";

export const paymentOptionData = [
  {
    id: "cash",
    name: "Cash",
    icon: <Wallet01Icon size={28} className="" />,
  },
  {
    id: "card",
    name: "Card",
    icon: <MasterCardIcon size={28} className="" />,
  },
  {
    id: "bank",
    name: "Bank",
    icon: <BankIcon size={28} className="" />,
  },
];

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { InformationDiamondIcon, Invoice02Icon } from "hugeicons-react";
import { EllipsisVertical } from "lucide-react";

const SingleSaleMenu = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <div className=" hover:bg-gray-200 rounded-full p-1.5 transition-all cursor-pointer">
          <EllipsisVertical size={14} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"start"} side={"left"}>
        <DropdownMenuItem className={"font-baloo "}>
          <Invoice02Icon strokeWidth={1.5} /> Download invoice
        </DropdownMenuItem>
        <DropdownMenuItem className={"font-baloo "}>
          <InformationDiamondIcon strokeWidth={1.5} /> See details
        </DropdownMenuItem>
        <DropdownMenuArrow fill="#00a76f" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SingleSaleMenu;

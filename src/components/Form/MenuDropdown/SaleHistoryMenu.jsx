import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { PrinterIcon } from "hugeicons-react";
import { EllipsisVertical, PrinterCheckIcon } from "lucide-react";

const SaleHistoryMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="p-2 rounded-full hover:bg-slate-600/10 cursor-pointer transition-all text-primaryColor">
          <EllipsisVertical size={16} className="text-slate-700" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"end"}>
        <DropdownMenuItem>
          <div className="flex items-center gap-2 font-baloo text-headerColor">
            <PrinterIcon size={16} strokeWidth={2} />
            Print All Invoice
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex items-center gap-2 font-baloo text-headerColor">
            <PrinterCheckIcon size={16} strokeWidth={2} />
            Print Selected Invoice
          </div>
        </DropdownMenuItem>
        <DropdownMenuArrow fill="#00a76f" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SaleHistoryMenu;

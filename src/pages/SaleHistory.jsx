import { saleHistoryTabData } from "@/assets/data/saleHistoryTabData";
import CustomTab from "@/components/CustomTab/CustomTab";
import CustomDateSelect from "@/components/Form/CustomDateSelect/CustomDateSelect";
import CustomInput from "@/components/Form/CustomInput/CustomInput";
import { EllipsisVertical } from "lucide-react";

const SaleHistory = () => {
  return (
    <div className="custom-container mt-5 mb-8">
      <h4 className="text-2xl font-light">Sale History</h4>
      <div className="mt-5">
        <CustomTab data={saleHistoryTabData} hasUnderBorder={true} />
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="grid grid-cols-2 gap-3">
            <CustomDateSelect btnClass={"!w-full"} />
            <CustomDateSelect btnClass={"!w-full"} />
          </div>
          <div className="flex-1 flex items-center gap-2">
            <CustomInput
              id={"searchQuery"}
              placeholder={"Search Your Product"}
              className={"flex-1"}
            />
            <div className="p-2 rounded-full hover:bg-slate-600/10 cursor-pointer transition-all">
              <EllipsisVertical size={16} className="text-slate-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleHistory;

import { saleHistoryTabData } from "@/assets/data/saleHistoryTabData";
import CustomTab from "@/components/CustomTab/CustomTab";
import CustomDateSelect from "@/components/Form/CustomDateSelect/CustomDateSelect";
import CustomInput from "@/components/Form/CustomInput/CustomInput";
import SaleHistoryMenu from "@/components/Form/MenuDropdown/SaleHistoryMenu";
import SingleSaleMenu from "@/components/Form/MenuDropdown/SingleSaleMenu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SaleHistory = () => {
  return (
    <div className="custom-container mt-5 mb-8">
      <h4 className="text-2xl font-light">Sale History</h4>
      <div className="mt-5">
        <CustomTab data={saleHistoryTabData} hasUnderBorder={true} />
        {/* filter */}
        <div className="mt-3 grid grid-cols-2 gap-3 ">
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
            {/* <div className="p-2 rounded-full hover:bg-slate-600/10 cursor-pointer transition-all">
              <EllipsisVertical size={16} className="text-slate-700" />
            </div> */}
            <SaleHistoryMenu />
          </div>
        </div>
      </div>
      {/* table  */}
      <div className="mt-5 border border-gray-300 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow
              className={
                "!text-slate-800 border-b border-gray-300 bg-primaryBackground/20 hover:bg-primaryBackground/25"
              }
            >
              <TableHead className={" w-8 text-slate-800 "}>
                <Checkbox
                  id={"all-check"}
                  className={"text-slate-400 border-slate-300"}
                />
              </TableHead>
              <TableHead className={"text-slate-700 border-r border-gray-300 "}>
                Brand
              </TableHead>
              <TableHead className={"text-slate-700 border-r border-gray-300 "}>
                Product
              </TableHead>
              <TableHead className={"text-slate-700 border-r border-gray-300 "}>
                Cost Price
              </TableHead>
              <TableHead className={"text-slate-700 border-r border-gray-300 "}>
                Add On
              </TableHead>
              <TableHead className={"text-slate-700 border-r border-gray-300 "}>
                Discount
              </TableHead>
              <TableHead className={"text-slate-700 border-r border-gray-300 "}>
                Total Price
              </TableHead>
              <TableHead className={"text-slate-700 border-r border-gray-300 "}>
                Customer
              </TableHead>
              <TableHead className={"text-slate-700 border-r border-gray-300 "}>
                Date
              </TableHead>
              <TableHead className={"text-slate-700 border-r border-gray-300 "}>
                Warranty
              </TableHead>
              <TableHead className={" w-6"}></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className={"text-slate-700"}>
              <TableCell className={""}>
                <Checkbox
                  id={"all-check"}
                  className={"text-slate-400 border-slate-300"}
                />
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                Apple
              </TableCell>
              <TableCell className={"max-w-72 border-r border-gray-300"}>
                <div>
                  {/* <div className="w-10 h-8 border overflow-hidden flex items-center justify-center">
                    <img src={phone} alt="" className="w-full " />
                  </div> */}
                  <h3 className="font-medium">IPhone 16 pro max</h3>
                </div>
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                120000
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                10000
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>00</TableCell>
              <TableCell className={"border-r border-gray-300"}>
                130000
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                Nurul hasan sohan
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                june 1st, 2025
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                2 year
              </TableCell>
              <TableCell>
                <SingleSaleMenu />
              </TableCell>
            </TableRow>
            <TableRow className={"text-slate-700"}>
              <TableCell className={""}>
                <Checkbox
                  id={"all-check"}
                  className={"text-slate-400 border-slate-300"}
                />
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                Apple
              </TableCell>
              <TableCell className={"max-w-72 border-r border-gray-300"}>
                <div>
                  {/* <div className="w-10 h-8 border overflow-hidden flex items-center justify-center">
                    <img src={phone} alt="" className="w-full " />
                  </div> */}
                  <h3 className="font-medium">IPhone 16 pro max</h3>
                </div>
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                120000
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                10000
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>00</TableCell>
              <TableCell className={"border-r border-gray-300"}>
                130000
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                Nurul hasan sohan
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                june 1st, 2025
              </TableCell>
              <TableCell className={"border-r border-gray-300"}>
                2 year
              </TableCell>
              <TableCell>
                <SingleSaleMenu />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default SaleHistory;

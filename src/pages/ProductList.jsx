import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckmarkCircle01Icon } from "hugeicons-react";
import { EllipsisVertical } from "lucide-react";
import product from "../assets/image/iphone-16-pro-max-DesertTitanium-600x600.webp";

const ProductList = () => {
  return (
    <div className="max-w-[1500px] xl:mx-auto xl:px-16 lg:px-14 md:px-10 sm:px-6 px-3 mt-5 mb-8">
      <h4 className="text-2xl font-light">Product List</h4>
      <div className="mt-5">
        <Table>
          <TableHeader className={""}>
            <TableRow className={"!border-none bg-primaryBackground/40"}>
              {/* <TableHead className={"border w-12"}>No</TableHead> */}
              <TableHead
                className={"!rounded-tl-md !rounded-bl-md overflow-hidden"}
              >
                Products
              </TableHead>
              <TableHead>Cost Price</TableHead>
              <TableHead>Add On</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead
                className={"w-10 !rounded-tr-md !rounded-br-md overflow-hidden"}
              ></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className={"!border-b"}>
              <TableCell>
                <div className="flex gap-2">
                  <div className="border p-0.5 w-10 rounded-lg flex items-center justify-center">
                    <img src={product} alt="" className="w-full " />
                  </div>
                  <div>
                    <h2 className="text-base font-medium">Iphone 15 pro max</h2>
                    <p>Titanium</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>100000 BDT</TableCell>
              <TableCell>10000 BDT</TableCell>
              <TableCell>20 pcs</TableCell>
              <TableCell>200 pcs</TableCell>
              <TableCell>
                <button
                  className="flex items-center  gap-2 bg-primaryBackground/70 px-3 py-1 rounded-full
                 text-primaryColor border border-primaryColor font-medium text-sm"
                >
                  <CheckmarkCircle01Icon
                    size={16}
                    strokeWidth={2}
                    className="-mt-1"
                  />{" "}
                  In Stock
                </button>
              </TableCell>
              <TableCell className={""}>
                <div className="hover:bg-slate-500/10 rounded-full p-1.5 transition-all duration-200 cursor-pointer">
                  <EllipsisVertical size={16} className="text-slate-700" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow className={"!border-b"}>
              <TableCell>
                <div className="flex gap-2">
                  <div className="border p-0.5 w-10 rounded-lg flex items-center justify-center">
                    <img src={product} alt="" className="w-full " />
                  </div>
                  <div>
                    <h2 className="text-base font-medium">Iphone 15 pro max</h2>
                    <p>Titanium</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>100000 BDT</TableCell>
              <TableCell>10000 BDT</TableCell>
              <TableCell>20 pcs</TableCell>
              <TableCell>200 pcs</TableCell>
              <TableCell>
                <button
                  className="flex items-center  gap-2 bg-red-500/15 px-3 py-1 rounded-full
                 text-red-500 border border-red-500 font-medium text-sm"
                >
                  <CheckmarkCircle01Icon
                    size={16}
                    strokeWidth={2}
                    className="-mt-1"
                  />{" "}
                  Out of Stock
                </button>
              </TableCell>
              <TableCell className={""}>
                <div className="hover:bg-slate-500/10 rounded-full p-1.5 transition-all duration-200 cursor-pointer">
                  <EllipsisVertical size={16} className="text-slate-700" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductList;

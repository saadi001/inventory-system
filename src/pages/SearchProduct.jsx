import {
  FolderFileStorageIcon,
  PaintBoardIcon,
  Search01Icon,
} from "hugeicons-react";
import { Flag, MicrochipIcon } from "lucide-react";
import product from "../assets/image/iphone-16-pro-max-DesertTitanium-600x600.webp";

const SearchProduct = () => {
  return (
    <div className="max-w-[1500px] xl:mx-auto xl:px-16 lg:px-14 md:px-10 sm:px-6 px-3">
      <div className="mt-5 max-w-[800px] mx-auto relative">
        <input
          type="text"
          placeholder="Search your product by IMEI"
          className="w-full border pl-5 rounded-lg py-2.5 focus:outline-none bg-slate-100/30"
        />
        <button className="absolute inset-y-1 right-1 bg-primaryColor hover:bg-primaryHover rounded-md flex items-center gap-2 px-3 text-white ">
          <Search01Icon size={18} strokeWidth={2} className="-mt-0.5" /> Search
        </button>
      </div>

      <div className="max-w-[800px] mt-6 mx-auto">
        <div className="border p-2 flex justify-between items-center rounded-lg">
          <div className="flex gap-3">
            <div className="w-12 h-14 flex items-center justify-center overflow-hidden">
              <img src={product} alt="" className=" w-full border rounded-md" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Iphone 13 pro max ultra</h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 text-sm">
                  <span className=" p-0.5 rounded-md border border-slate-700">
                    <MicrochipIcon size={14} strokeWidth={1.5} />
                  </span>{" "}
                  24 GB
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className=" p-0.5 rounded-md border border-slate-700">
                    <FolderFileStorageIcon size={14} strokeWidth={1.5} />
                  </span>{" "}
                  1 TB
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className=" p-0.5 rounded-md border border-slate-700">
                    <PaintBoardIcon size={14} strokeWidth={1.5} />
                  </span>{" "}
                  Titanium
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span className=" p-0.5 rounded-md border border-slate-700">
                    <Flag size={14} strokeWidth={1.5} />
                  </span>{" "}
                  US
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="border-2 border-primaryColor text-primaryColor px-4 py-1 rounded-full text-base font-semibold">
              Sold
            </button>
            <button className="px-3 py-1 rounded-full text-white font-semibold hover:bg-primaryHover hover:border-primaryHover bg-primaryColor border-2 border-primaryColor ">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;

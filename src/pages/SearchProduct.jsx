import { Search01Icon } from "hugeicons-react";
import product from "../assets/icons/avatart.svg";

const SearchProduct = () => {
  return (
    <div className="max-w-[1500px] xl:mx-auto xl:px-16 lg:px-14 md:px-10 sm:px-6 px-3">
      <div className="mt-5 max-w-[800px] mx-auto relative">
        <input
          type="text"
          placeholder="Search you product by IMEI"
          className="w-full border pl-5 rounded-lg py-2.5 focus:outline-none bg-slate-100/30"
        />
        <button className="absolute inset-y-1 right-1 bg-primaryColor rounded-md flex items-center gap-2 px-3 text-white">
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
              <h3 className="text-lg font-medium">Iphone 13 pro max</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;

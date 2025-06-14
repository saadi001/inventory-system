import CustomEditableDropdown from "@/components/Form/CustomEditableDropdown/CustomEditableDropdown";
import CustomInput from "@/components/Form/CustomInput/CustomInput";
import PaymentOption from "@/components/Form/PaymentOption/PaymentOption";
import { useState } from "react";
import { educationsData } from "./AddProduct";

const CreateSale = () => {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-[1500px] xl:mx-auto xl:px-16 lg:px-14 md:px-10 sm:px-6 px-3 mt-5 mb-8">
      <h4 className="text-2xl font-light">Create Sale</h4>
      <form className="border rounded-lg px-6 p-4 flex flex-col gap-5 mt-5">
        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          <CustomInput
            id={"product"}
            label={"Select product"}
            placeholder={"Search and select product"}
            required={true}
          />
          <CustomEditableDropdown
            placeholder={"Select or write supplier"}
            options={educationsData}
            onChange={(value) => setValue(value)}
            value={value}
            required={true}
            label={"Supplier"}
          />
          <CustomEditableDropdown
            placeholder={"Select or write supplier"}
            options={educationsData}
            onChange={(value) => setValue(value)}
            value={value}
            required={true}
            label={"Customer"}
          />
          <CustomInput
            id={"warranty"}
            label={"Warranty"}
            placeholder={"Ex: 5 years"}
          />
          <CustomInput
            id={"price"}
            label={"Price"}
            placeholder={"Ex: 100000 BDT"}
          />
          <CustomInput id={"addOn"} label={"Add On"} placeholder={"1000 BDT"} />
          <CustomInput
            id={"discount"}
            label={"Discount"}
            placeholder={"Ex: 500 BDT"}
          />
          <CustomInput
            id={"totalPrice"}
            label={"Total price"}
            placeholder={"Ex: 100100 BDT"}
            disabled={true}
            value={"100100 BDT"}
          />
          <PaymentOption />
        </div>
        <div className="flex justify-center mt-3">
          <button
            type="submit"
            className="bg-primaryColor hover:bg-primaryHover transition-all px-5 py-2 rounded-lg text-white"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSale;

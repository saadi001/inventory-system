import CustomEditableDropdown from "@/components/Form/CustomEditableDropdown/CustomEditableDropdown";
import { useState } from "react";
import { educationsData } from "./AddProduct";

const CreateSale = () => {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-[1500px] xl:mx-auto xl:px-16 lg:px-14 md:px-10 sm:px-6 px-3 mt-5 mb-8">
      <h4 className="text-2xl font-light">Create Sale</h4>
      <form className="border rounded-lg px-6 p-4 flex flex-col gap-5 mt-5">
        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          <CustomEditableDropdown
            placeholder={"Select or write degree"}
            options={educationsData}
            onChange={(value) => setValue(value)}
            value={value}
            required={true}
            label={"Supplier"}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateSale;

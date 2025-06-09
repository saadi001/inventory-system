import CustomEditableDropdown from "@/components/Form/CustomEditableDropdown/CustomEditableDropdown";
import CustomInput from "@/components/Form/CustomInput/CustomInput";
import FileUpload from "@/components/Form/FileUpload/FileUpload";
import { useState } from "react";

const CreateSale = () => {
  const [value, setValue] = useState("");
  const educationsData = ["SSC", "HSC", "Bachelor", "Masters", "Ph.D."];
  return (
    <div className="max-w-[1500] xl:mx-auto xl:px-16 lg:px-14 md:px-10 sm:px-6 px-3 mt-3 mb-8">
      <h4 className="text-xl font-light">Create Sale</h4>
      <form className="border rounded-lg px-6 p-4 flex flex-col gap-5 mt-3">
        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          {/* <CustomInput
            id={"brand"}
            label={"Brand"}
            required={true}
            placeholder={"Ex: Apple"}
          /> */}
          <div>
            <CustomEditableDropdown
              placeholder={"Select or write degree"}
              options={educationsData}
              onChange={(value) => setValue(value)}
              value={value}
              required={true}
              label={"Brand"}
            />
          </div>
          <CustomInput
            id={"model"}
            label={"Model"}
            required={true}
            placeholder={"Ex: 14 pro max"}
          />
          <CustomInput
            id={"imei"}
            label={"IMEI"}
            required={true}
            placeholder={"Ex: 351916062476975"}
          />
          <CustomInput
            id={"color"}
            label={"Color"}
            required={true}
            placeholder={"Ex: Gold"}
          />
          <CustomInput
            id={"storage"}
            label={"Storage"}
            type={"number"}
            required={true}
            placeholder={"Ex: 64"}
          />
          <CustomInput
            id={"ram"}
            label={"Ram"}
            type={"number"}
            required={true}
            placeholder={"Ex: 8"}
          />
          <CustomInput
            id={"country"}
            label={"Country"}
            placeholder={"Ex: United State"}
          />
          <CustomInput
            id={"paidStatus"}
            label={"Payment staus"}
            required={true}
            placeholder={"Ex: 20000"}
          />
          <CustomInput
            id={"costPrice"}
            label={"Cost Price"}
            required={true}
            placeholder={"Ex: 20000"}
          />

          <CustomInput
            id={"addOn"}
            label={"Add on"}
            required={true}
            placeholder={"Ex: 20000"}
          />
          <CustomInput
            id={"warranty"}
            label={"Warranty"}
            placeholder={"Ex: 2 year"}
          />
          <div className="row-span-2">
            <FileUpload id={"productPhoto"} label={"Product Image"} />
          </div>
          <CustomInput
            id={"remark"}
            label={"Remark"}
            placeholder={"Write remark here"}
          />
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

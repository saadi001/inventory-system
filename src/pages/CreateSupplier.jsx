import CustomInput from "@/components/Form/CustomInput/CustomInput";
import FileUpload from "@/components/Form/FileUpload/FileUpload";

const CreateSupplier = () => {
  return (
    <div className="custom-container mt-5 mb-8">
      <h4 className="text-2xl font-light">create supplier</h4>
      <form className="border rounded-lg px-6 p-4 flex flex-col gap-5 mt-5">
        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          <CustomInput
            id={"name"}
            label={"Name"}
            placeholder={"Write name of Supplier."}
            required={true}
          />

          <div className="row-span-2">
            <FileUpload label={"Image upload"} />
          </div>

          <CustomInput
            id={"phone"}
            label={"Phone"}
            placeholder={"Write Phone Number."}
            type={"number"}
          />
          <CustomInput
            id={"email"}
            label={"Email Address"}
            placeholder={"Write email address."}
          />
          <CustomInput
            id={"country"}
            label={"Country"}
            placeholder={"Write country name."}
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

export default CreateSupplier;

import upload from "../../../assets/icons/upload icon 3d.png";
const FileUpload = ({ id, label }) => {
  return (
    <div className="flex flex-col h-full">
      <label htmlFor={id} className="text-headerColor text-sm font-semibold">
        {label}
      </label>
      <label
        htmlFor={id}
        className="border border-dashed border-slate-200 h-full flex items-center justify-center flex-col mt-1 rounded-lg cursor-pointer"
      >
        <img src={upload} alt="" className="w-12" />
        <p className="text-textColor">Click to upload image</p>
      </label>
      <input type="file" id={id} className="" hidden />
    </div>
  );
};

export default FileUpload;

const CustomInput = ({
  id,
  label,
  required,
  disabled,
  placeholder,
  type,
  ...props
}) => {
  return (
    <div className="">
      <label htmlFor={id} className="text-headerColor text-sm font-semibold ">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type || "text"}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full  h-auto border rounded-lg flex-1 text-base  px-3 py-2.5 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor placeholder:font-publicSans placeholder:text-sm"
        {...props}
      />
    </div>
  );
};

export default CustomInput;

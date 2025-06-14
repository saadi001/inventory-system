import { paymentOptionData } from "@/assets/data/paymentOptionData";
import { useState } from "react";

const PaymentOption = () => {
  const [active, setActive] = useState("");
  return (
    <div className="col-span-2 space-y-1">
      <label
        htmlFor={"paymentOption"}
        className="text-headerColor text-sm font-semibold "
      >
        Payment Option
        <span className="text-red-600">*</span>
      </label>
      <div className="grid grid-cols-3 gap-3">
        {paymentOptionData.map((payment, i) => (
          <div
            key={i}
            onClick={() => setActive(payment?.id)}
            className={` ${
              active === payment?.id
                ? "outline outline-1  outline-primaryColor text-primaryColor"
                : "outline outline-1 outline-slate-300 text-headerColor "
            } p-5 rounded-lg flex items-center justify-center flex-col cursor-pointer relative transition-all`}
          >
            {payment?.icon}
            <p className=" text-base font-medium">{payment?.name}</p>
            {payment?.id === active && (
              <div className="w-4 h-4 rounded-full border-4 absolute right-2 top-2 border-primaryColor"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentOption;

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar03Icon } from "hugeicons-react";
import { useState } from "react";

const CustomDateSelect = ({ btnClass }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <button
          className={`border hover:border-gray-600 px-3 py-2.5 rounded-lg min-w-44 flex justify-between items-center ${btnClass}`}
        >
          {date ? date.toLocaleDateString() : "Select date"}
          <Calendar03Icon size={20} strokeWidth={2} />
        </button>
      </PopoverTrigger>
      <PopoverContent className={"w-auto p-0 overflow-hidden "}>
        <Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default CustomDateSelect;

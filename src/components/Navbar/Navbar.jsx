import avatar from "../../assets/icons/avatart.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b">
      <p className="">Good Morning</p>
      <div>
        <div className="w-9 h-9 border rounded-full flex items-center justify-center overflow-hidden">
          <img src={avatar} alt="avatar" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

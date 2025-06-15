import loginPhoto from "../assets/image/login page image-cropped.svg";

const Login = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-2 font-baloo">
      <div className="bg-primaryBackground/40 flex gap-2 justify-center 2xl:justify-end items-center p-8 ">
        <div className="  flex flex-col justify-center items-center">
          <img
            src={loginPhoto}
            alt="login image"
            className="max-w-[550px] w-[70%]"
          />
          <h4 className="text-3xl font-medium text-headerColor mt-8">
            Keep track every records easily.
          </h4>
          <p className="text-gray-700 text-base mt-3">
            Manage stock, sales, and suppliers in one place — with real-time
            accuracy.
          </p>
        </div>
      </div>
      <div className="flex items-center px-20 py-8">inputs</div>
    </div>
  );
};

export default Login;

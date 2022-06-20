import Image from "next/image";
import { useState } from "react";
import { useAppContext } from "../../context/appContext";
import YoonHanTharLogoOnly from "../../public/assets/images/logo/YoonHanTharLogoOnly.png";
import { signin } from "../../utils/apiRoutes";

const Signin = ({ csrfToken }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const signinHandler = async (e) => {
    e.preventDefault();
    try {
      await signin(formData);
    } catch (error) {
      console.log("Signin Error ->", error);
    }
  };
  return (
    <div className="grid w-full h-screen grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center ">
        <div className="w-40 h-40 ">
          <Image src={YoonHanTharLogoOnly} alt={`Yoon han Thar`} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-slate-200">
        <div className="w-1/2 space-y-5">
          <h1 className="text-lg tracking-wide uppercase ">
            Sign in to your account
          </h1>
          <div className="space-y-5 ">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <div className="">
              <input
                className="w-full border rounded-lg shadow-lg border-slate-600"
                type="email"
                name="email"
                id="email"
                required
                placeholder=" Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="">
              <input
                className="w-full border rounded-lg shadow-lg border-slate-600"
                type="password"
                name="password"
                id="password"
                required
                placeholder=" Password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-end ">
            {/* <button> Keep Me Logged In</button> */}
            <button className="text-blue-800 "> Forgot passwprd?</button>
          </div>

          <div className="">
            <button
              onClick={signinHandler}
              className="w-full py-3 bg-yellow-400 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-white text-slate-50">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

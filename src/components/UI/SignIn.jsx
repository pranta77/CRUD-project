import React from "react";
import { BiLogoApple, BiSmile, BiSolidLockAlt } from "react-icons/bi";
import { Input, Checkbox, Button } from "antd";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Select, Space } from "antd";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  //   const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: data.email,
      password: data.password,
    };
    // try {

    //   if ("data" in resultAction) {
    //     if (resultAction.data.id) {
    //       toast.success("Registration Successful");
    //       setTimeout(() => {
    //         navigate("/login");
    //       }, 2000);
    //     } else {
    //       console.error("Invalid response from the API");
    //     }
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="flex  justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#323B4B] py-2">
          Getting Started
        </h1>
        <p className="text-[#8A94A6] pb-2">Create an account to continue!</p>
        <div className="w-[600px]">
          <Input
            className="h-10 border-2 w-3/4"
            placeholder="Your Name"
            prefix={<BiSmile className="text-[#C1C7D0]" />}
            type="text"
          />

          <Input.Password
            className="h-10 my-5 border-2 w-3/4"
            placeholder="Create Password"
            prefix={<BiSolidLockAlt className="text-[#C1C7D0] " />}
            type="password"
            required
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>

        <Button
          onClick={handleFormSubmit}
          className=" bg-[#377DFF] w-3/4 h-10 text-lg text-white hover:bg-white my-4"
        >
          Sign In
        </Button>

        <div className="m-4">
          Don’t have an account yet?{" "}
          <Link to="/" className="text-[#377DFF]">
            Sign Up
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

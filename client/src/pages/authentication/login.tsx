import { MdHome } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import React, { useState } from "react";
import Logo from "../shared-components/logo";
import { useRouter } from "next/router";
import Link from "next/link";
import Swal from "sweetalert2";
import { UseAuthContext } from "./auth-provider";

const Login: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { handleSignIn } = UseAuthContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    try {
      handleSignIn(formData.email, formData.password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    Swal.fire({
      title: "Did you want to leave the page ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, go home",
      cancelButtonText: "No, i don't",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/");
      }
      return;
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen w-full text-gray-500">
        <div className="flex gap-2 justify-center items-center mb-10 pb-1">
          {/* <Logo /> */}
          <span className="capitalize font-semibold text-lg mt-1">Login</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-5"
        >
          <div className="flex flex-col gap-2 text-lg text-gray-500">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              className="border outline-gray-500 px-3 py-2 w-full sm:w-96"
              placeholder="enter email address"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 text-lg text-gray-500">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="border outline-gray-500 px-3 py-2 w-full sm:w-96"
              placeholder="enter password"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" id="show" />
            <label
              htmlFor="show"
              className="select-none"
              onClick={handleShowPassword}
            >
              Show Password
            </label>
          </div>
          <button className="bg-gray-500 text-white text-lg rounded-md px-5 py-2">
            Login
          </button>
        </form>
        <Link
          href="/authentication/register"
          className="my-5 border-b-2 hover:border-gray-500"
        >
          Create an account
        </Link>
        <div className="flex gap-2">
          <button
            className="bg-gray-500 text-white text-2xl rounded-md px-3 py-2"
            onClick={handleGoBack}
          >
            <BiArrowBack />
          </button>
          <button
            className="bg-gray-500 text-white text-2xl rounded-md px-3 py-2"
            onClick={handleGoHome}
          >
            <MdHome />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Logo from "../shared-components/logo";
import { MdHome } from "react-icons/md";
import Swal from "sweetalert2";
import { UseAuthContext } from "./auth-provider";

const Register: React.FC = () => {
  const router = useRouter();
  const { handleSignUp } = UseAuthContext();
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [strongPassword, setStrongPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "retypePassword") {
      if (value === formData.password) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
    }
    if (name === "password") {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
      setStrongPassword(passwordRegex.test(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.retypePassword) {
      console.log("Passwords do not match");
      return;
    }
    if (!strongPassword) {
      console.log("Password does not meet strength requirements");
      return;
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "User registration successfull!",
      showConfirmButton: false,
      timer: 1500,
    });
    // router.push("");
    try {
      await handleSignUp(formData.email, formData.password, formData.name, "");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error creating new user!",
      });
      console.error("Error signing up:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen w-full text-gray-500">
        <div className="flex gap-2 justify-center items-center mb-10 pb-1">
          {/* <Logo /> */}
          <span className="capitalize font-semibold text-lg mt-1">
            Register
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start gap-5"
        >
          <div className="flex flex-col gap-2 text-lg text-gray-500">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              className="border outline-gray-500 px-3 py-2 w-96"
              placeholder="enter your full name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2 text-lg text-gray-500">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="text"
              className="border outline-gray-500 px-3 py-2 w-96"
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
              type="password"
              className="border outline-gray-500 px-3 py-2 w-96"
              placeholder="enter password"
              name="password"
              onChange={handleInputChange}
            />
            {formData.password !== "" && (
              <span
                className={
                  strongPassword ? "text-green-500 w-96" : "text-red-500 w-96"
                }
              >
                {strongPassword
                  ? "Password is strong and meets the requirements."
                  : "Password must contain at least one uppercase letter, one number, one special character, and be at least 8 characters long."}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 text-lg text-gray-500">
            <label htmlFor="password" className="font-semibold">
              Re-type Password
            </label>
            <input
              type="password"
              className="border outline-gray-500 px-3 py-2 w-96"
              placeholder="enter password"
              name="retypePassword"
              onChange={handleInputChange}
            />
            {formData.retypePassword !== "" && (
              <span
                className={
                  passwordMatch ? "text-green-500 w-96" : "text-red-500 w-96"
                }
              >
                {passwordMatch
                  ? "Passwords match, you can continue."
                  : "Passwords do not match. Please check and correct any mistakes."}
              </span>
            )}
          </div>

          <button className="bg-gray-500 text-white text-lg rounded-md px-5 py-2">
            Register
          </button>
        </form>
        <Link
          href="/authentication/login"
          className="my-5 border-b-2 hover:border-gray-500"
        >
          Already have an account
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

export default Register;

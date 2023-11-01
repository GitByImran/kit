import Link from "next/link";
import React from "react";
import Logo from "../logo";

const Footer = () => {
  return (
    <div className="border-t py-10">
      <div className="body-width text-gray-700">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <h2 className="text-lg font-semibold">Legal</h2>
            <div className="flex flex-col my-5">
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="text-lg font-semibold">More</h2>
            <div className="flex flex-col my-5">
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="text-lg font-semibold">About Us</h2>
            <div className="flex flex-col my-5">
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
            </div>
          </div>
          <div className="col-span-3">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <div className="flex flex-col my-5">
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mt-10">
          <Logo />
          <h2 className="text-lg font-semibold"> &copy; All right reserved</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

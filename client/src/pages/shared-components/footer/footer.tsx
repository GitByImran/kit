import Link from "next/link";
import React from "react";
import Logo from "../logo";

const Footer: React.FC = () => {
  return (
    <div className="border-t py-5 md:py-10">
      <div className="body-width text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="my-5 flex flex-col gap-5">
            <h2 className="text-lg font-semibold">Legal</h2>
            <div className="flex flex-col">
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
            </div>
          </div>
          <div className="my-5 flex flex-col gap-5">
            <h2 className="text-lg font-semibold">More</h2>
            <div className="flex flex-col">
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
            </div>
          </div>
          <div className="my-5 flex flex-col gap-5">
            <h2 className="text-lg font-semibold">About Us</h2>
            <div className="flex flex-col">
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
            </div>
          </div>
          <div className="my-5 flex flex-col gap-5">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <div className="flex flex-col">
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
              <Link href="#">Lorem ipsum.</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mt-10">
          <Logo />
          <h2 className="text-sm font-semibold"> &copy; All right reserved</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

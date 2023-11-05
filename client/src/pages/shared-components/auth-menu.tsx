import React, { useState } from "react";
import { UseAuthContext } from "../authentication/auth-provider";
import Image from "next/image";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Link from "next/link";

interface NavmenuProps {
  showProfileMenu: boolean;
  handleToggleProfileMenu: () => void;
}

const profileMenus = [
  { label: "Edit Profile", goto: "" },
  { label: "My Posts", goto: "" },
];

const AuthMenu: React.FC<NavmenuProps> = ({
  showProfileMenu,
  handleToggleProfileMenu,
}) => {
  const { user, currentUser, handleSignOut } = UseAuthContext();

  const handleLogOut = () => {
    handleSignOut();
  };
  return (
    <div>
      <div
        className={`${
          showProfileMenu && "shadow-md"
        } border flex justify-between gap-5 px-2 py-1 rounded-md relative cursor-pointer`}
        onClick={handleToggleProfileMenu}
      >
        <div className="h-7 w-7 rounded-full overflow-hidden border bg-gray-500">
          {currentUser?.photoURL ? (
            <Image
              src="https://i.ibb.co/NVNvpCC/Picsart-22-12-03-17-00-41-232-2.jpg"
              alt=""
              height={100}
              width={100}
              className="h-full w-full object-cover"
            />
          ) : (
            ""
          )}
        </div>
        <button>{showProfileMenu ? <BsChevronUp /> : <BsChevronDown />}</button>
        {showProfileMenu && (
          <div className="absolute top-16 right-0 bg-white border w-60 px-2 py-2 rounded-md shadow-xl">
            <div className="flex flex-col">
              {profileMenus.map((menu, index) => (
                <Link
                  href={menu.goto}
                  key={index}
                  className="px-2 py-1 rounded-md text-gray-700 hover:font-semibold hover:bg-gray-100"
                  onClick={handleToggleProfileMenu}
                >
                  {menu.label}
                </Link>
              ))}
              <Link
                href=""
                className="px-2 py-1 rounded-md text-gray-700 hover:font-semibold hover:bg-gray-100"
                onClick={handleLogOut}
              >
                Log Out
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthMenu;

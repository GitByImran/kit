import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import React from "react";
import Search from "./search";

interface NavmenuProps {
  showMenu: boolean;
  handleToggleMenus: () => void;
}

const menus = [
  { label: "home", goto: "/" },
  { label: "blogs", goto: "/components/blog/blog" },
  { label: "update", goto: "" },
  { label: "analytics", goto: "" },
  { label: "contact us", goto: "" },
];

const Navmenu: React.FC<NavmenuProps> = ({ showMenu, handleToggleMenus }) => {
  console.log(showMenu);
  return (
    <div className={`${showMenu && "relative"}`}>
      {!showMenu ? (
        <div className="flex items-center gap-5">
          {menus.map((menu, index) => (
            <Link
              href={menu.goto}
              key={index}
              className="text-md capitalize font-semibold text-gray-700 flex"
            >
              {menu.label}
              <span className="text-xs">
                <HiOutlineExternalLink />
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-5 absolute right-0 top-7 w-fit p-5 bg-white border rounded-lg shadow-lg">
          {menus.map((menu, index) => (
            <Link
              href={menu.goto}
              key={index}
              className="text-md capitalize font-semibold text-gray-700 flex"
              onClick={handleToggleMenus}
            >
              {menu.label}
              <span className="text-xs">
                <HiOutlineExternalLink />
              </span>
            </Link>
          ))}
          <Search />
        </div>
      )}
    </div>
  );
};

export default Navmenu;

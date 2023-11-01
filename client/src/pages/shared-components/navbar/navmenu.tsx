import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import React from "react";

const menus = [
  { label: "home", goto: "/" },
  { label: "blogs", goto: "/components/blog/blog" },
  { label: "update", goto: "" },
  { label: "analytics", goto: "" },
  { label: "contact us", goto: "" },
];

const Navmenu = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navmenu;

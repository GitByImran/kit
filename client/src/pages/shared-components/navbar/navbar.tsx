import React from "react";
import Logo from "../logo";
import Navmenu from "./navmenu";
import Search from "./search";
import Home from "@/pages/components/home/home";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div>
      <div className="shadow">
        <div className="body-width">
          <nav className="flex items-center justify-between py-2">
            <div className="flex items-center gap-10">
              <Logo />
              <Navmenu />
            </div>
            <div className="flex items-center gap-5">
              <Search />
              {/* todo : hide if not need */}
              <h2 className="text-lg capitalize font-semibold text-gray-700 flex">
                Learn | Teach
              </h2>
            </div>
          </nav>
        </div>
      </div>
      <div className="body-width">{router.pathname === "/" && <Home />}</div>
    </div>
  );
};

export default Navbar;

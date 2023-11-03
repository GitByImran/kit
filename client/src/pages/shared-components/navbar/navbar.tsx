import { BsChevronDown } from "react-icons/bs";
import React from "react";
import Logo from "../logo";
import Navmenu from "./navmenu";
import Search from "./search";
import Home from "@/pages/components/home/home";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { MdWidthFull } from "react-icons/md";
import { UseAuthContext } from "@/pages/authentication/auth-provider";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { currentUser } = UseAuthContext();
  console.log(currentUser);
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
              {}
            </div>
          </nav>
        </div>
      </div>
      <div className="body-width">{router.pathname === "/" && <Home />}</div>
    </div>
  );
};

export default Navbar;

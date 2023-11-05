import { HiBars2 } from "react-icons/hi2";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import React, { useState } from "react";
import Logo from "../logo";
import Navmenu from "./navmenu";
import Search from "./search";
import Home from "@/pages/components/home/home";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { MdWidthFull } from "react-icons/md";
import { UseAuthContext } from "@/pages/authentication/auth-provider";
import AuthMenu from "../auth-menu";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { user, currentUser, handleSignOut } = UseAuthContext();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const handleToggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenus = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="shadow">
        <div className="body-width">
          <nav className="flex items-center justify-between py-2">
            <div className="flex items-center gap-10">
              <Logo />
              <div className="hidden lg:block">
                <Navmenu
                  showMenu={showMenu}
                  handleToggleMenus={handleToggleMenus}
                />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-5">
                <div className="hidden lg:block">
                  <Search />
                </div>
                {currentUser ? (
                  <AuthMenu
                    showProfileMenu={showProfileMenu}
                    handleToggleProfileMenu={handleToggleProfileMenu}
                  />
                ) : (
                  <Link href="/authentication/login">
                    <button className="text-lg capitalize font-semibold text-gray-700 hover:text-gray-900">
                      Login
                    </button>
                  </Link>
                )}
              </div>
              <div className="lg:hidden block">
                <button
                  className={`text-3xl rounded-full p-1 border ${
                    showMenu && "shadow-md"
                  }`}
                  onClick={handleToggleMenus}
                >
                  <HiBars2 />
                </button>
                {showMenu && (
                  <div>
                    <Navmenu
                      showMenu={showMenu}
                      handleToggleMenus={handleToggleMenus}
                    />
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="body-width">{router.pathname === "/" && <Home />}</div>
    </div>
  );
};

export default Navbar;

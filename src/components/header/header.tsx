import React from "react";
import Logo from '../../../public/logo.png'
import Link from "next/link";
import "@/app/globals.css"
import Image from "next/image";
import { usePathname } from "next/navigation";
import Navlink from "./navlink";

const Header = () => {


  return (
    <header className="overflow-visible"> {/* Ensure the header allows overflow */}
      <nav className="bg-gradient-to-b flex border-gray-200 px-4 lg:px-6 py-2.5 from-orange-300 relative text-black h-32">
        <div className="absolute inset-y-0 left-0 flex items-center ">
          <Image
            src={Logo}
            className="ml-5 h-24 overflow-visible"
            width={100}
            alt="Foodgasm logo"
            priority
          />
        </div>
        <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
          <div
            className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-black text-lg">
            <li>
              <Navlink href="/">Home</Navlink>
              </li>
              <li>
              <Navlink href="/meals">Meals</Navlink>
              </li>
              <li>
              <Navlink href="/community">Community</Navlink>
              </li>
              <li>
              <Navlink href="/team">Team</Navlink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

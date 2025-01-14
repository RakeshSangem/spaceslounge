import Image from "next/image";
import Link from "next/link";
import { MaterialUISwitch } from "../lightAndDark";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

import "./app";

const Navbar = ({ themeToggling, Logo, checked }) => {
  const [navIcons, setNavIcons] = useState(<RiMenu3Line />);
  const [navToggle, setNavToggle] = useState("false");

  // Open Navbar Links > 768px
  const openNavLink = () => {
    setNavToggle("true");
    setNavIcons(<RiCloseLine />);
  };
  // Close Navbar Links > 768px
  const closeNavLink = () => {
    setNavToggle("false");
    setNavIcons(<RiMenu3Line />);
  };
  // Function for closing and opening
  const navTogglingFunction = () => {
    navToggle == "false" ? openNavLink() : closeNavLink();
  };

  return (
    <nav className="w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50 px-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image src={Logo} alt="" />
      </Link>
      {/* Nav Links */}
      <ul data-nav-toggle={navToggle}>
        <MaterialUISwitch onClick={themeToggling} defaultChecked={checked} />
        <Link
          className="py-2 px-4 hover:opacity-80 duration-200"
          href={"/contributors"}>
          Contributors
        </Link>
        <Link className="py-2 px-4 hover:opacity-80 duration-200" href={"/"}>
          Sign In
        </Link>
        <Link
          className="py-2 px-4 bg-[#0078c2] text-white rounded-lg hover:bg-[#0078a2] duration-200"
          href={"/sign-up"}>
          Sign Up
        </Link>
      </ul>
      {/* icons for toggling */}
      <div className="hidden md:block text-2xl" onClick={navTogglingFunction}>
        {navIcons}
      </div>
    </nav>
  );
};

export default Navbar;

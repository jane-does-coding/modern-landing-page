"use client";
import { IoPersonCircleOutline } from "react-icons/io5";

import Link from "next/link";
import React, { useEffect } from "react";
import gsap from "gsap";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

const Navbar = () => {
  useEffect(() => {
    gsap.to(".navbar", {
      y: 0,
      duration: 0.25,
      delay: 1,
    });
  }, []);

  return (
    <>
      <div className="navbar translate-y-[-5rem] bg-slate-200/50 dark:bg-slate-900/50 backdrop-blur-md rounded-full z-[2] w-[95vw] lg:w-[70vw] fixed top-[1rem] py-2 px-4 lg:px-8 lg:pr-6 left-[2.5vw] lg:left-[15vw] flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
          <Link
            href={"/auth"}
            className="z-[20] decoration-none text-3lg rounded-full px-2 lg:px-6 py-2 hover:bg-slate-900/[10%] dark:hover:bg-black/[20%] transition text-black dark:text-white"
          >
            Explore
          </Link>
          <UserMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;

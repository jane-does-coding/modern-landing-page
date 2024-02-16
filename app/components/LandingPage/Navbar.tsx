"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import gsap from "gsap";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  useEffect(() => {
    gsap.to(".navbar", {
      y: 0,
      duration: 0.25,
      delay: 1,
    });

    gsap.to(".navbar2", {
      y: 0,
      duration: 0.25,
      delay: 1,
    });
  }, []);

  return (
    <>
      <div className="navbar translate-y-[-5rem] bg-slate-200/50 dark:bg-slate-900/50 overflow-hidden backdrop-blur-md rounded-full z-[10] w-[95vw] lg:w-[70vw] fixed top-[1rem] py-2 px-4 lg:px-8 left-[2.5vw] lg:left-[15vw] flex items-center justify-between">
        <Link
          href={"/"}
          className="decoration-none text-lg rounded-full text-black dark:text-white"
        >
          Logo
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={"/"}
            className="decoration-none text-3lg rounded-full px-4 lg:px-6 py-2 hover:bg-slate-900/[10%] dark:hover:bg-slate-900/[40%] transition text-black dark:text-white"
          >
            Login
          </Link>
          <Link href={"/"}>Join Now</Link>
        </div>
      </div>
      <div className="navbar2 translate-y-[-5rem] hidden md:block bg-slate-200/50 dark:bg-slate-900/50  overflow-hidden backdrop-blur-md rounded-full z-[10] fixed top-[1rem] left-[86vw] flex items-center justify-between">
        <ThemeToggle />
      </div>
    </>
  );
};

export default Navbar;

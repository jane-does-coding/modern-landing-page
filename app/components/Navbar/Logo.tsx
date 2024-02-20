"use client";

import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="logo bg-gradient-to-br from-gray-900 dark:from-black to-red-600 dark:to-red-400 text-transparent font-semibold decoration-none text-[1.5rem] jaldi rounded-full text-black dark:text-white"
    >
      StackFlip
    </Link>
  );
};

export default Logo;

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Link
      href={"/"}
      onClick={() => setDarkMode(!darkMode)}
      className="transition decoration-none text-3lg text-black dark:text-white rounded-full h-14 w-14 hover:bg-slate-900/[10%] dark:hover:bg-slate-900/[40%] flex items-center justify-center"
    >
      {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </Link>
  );
};

export default ThemeToggle;

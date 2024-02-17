"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-slate-200/50 p-4 mt-32 items-center justify-center">
      <div className="flex gap-12 w-fit mx-auto text-slate-600 transition">
        <Link href={"/"} className=" hover:text-slate-900 transition">
          <FaYoutube size={24} />
        </Link>
        <Link href={"/"} className=" hover:text-slate-900 transition">
          <FaGithub size={24} />
        </Link>
        <Link href={"/"} className=" hover:text-slate-900 transition">
          <FaLinkedin size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import banner from "../../../public/banner.jpg";
import gsap from "gsap";

const BannerImage = () => {
  useEffect(() => {
    gsap.to("#image-banner", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 1,
    });
  }, []);
  return (
    <div
      id={"image-banner"}
      className="relative select-none w-[90vw] left-[5vw] translate-y-[5rem] opacity-0"
    >
      <Image
        src={banner}
        className="select-none banner-image rounded-[2rem] mt-4 lg:mt-20"
        width={900}
        height={400}
        alt="image"
      />
      {/* Over image text */}
      <div className="select-none text-[6rem] lg:text-[12rem] absolute mt-4 top-[50%] translate-y-[-50%] text-white dark:text-gray-200 left-4 font-bold lg:leading-[12rem]">
        Study
        <br /> Better
      </div>
    </div>
  );
};

export default BannerImage;

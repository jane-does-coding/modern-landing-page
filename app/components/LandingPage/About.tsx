"use client";
import Image from "next/image";
import React from "react";
import "./LandingPage.css";

const About = () => {
  return (
    <div>
      <div className="flex gap-16 w-[90vw] lg:w-[60vw] my-4 mt-16 ml-[5vw] lg:ml-[20vw]">
        <div className="flex flex-col gap-2">
          <Image
            src={"/img1.jpg"}
            width={200}
            height={200}
            alt="image"
            className="img-full-width rounded-md mb-8"
          />
          <h2 className="text-lg font-semibold">Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            consequatur?
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            consequatur?
          </p>
          <Image
            src={"/img1.jpg"}
            width={200}
            height={200}
            alt="image"
            className="img-full-width rounded-md mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

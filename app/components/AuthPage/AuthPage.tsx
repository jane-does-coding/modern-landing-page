"use client";
import React, { useState } from "react";
import AnimatedBackground from "../AnimatedBackground";
import "../AuthPage/AuthPage.css";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div className="flex w-[100%]  h-screen items-center justify-center">
      <AnimatedBackground value={150} />
      <div className="flex flex-col backdrop-blur-md bg-slate-300/25 rounded-md w-[90vw] md:w-[50vw] lg:w-[35vw] px-6 py-4 pt-8">
        <h1 className="text-[1.5rem] text-center">Signup</h1>
        <div className="flex gap-4 mt-6">
          <input
            type="text"
            className="w-[100%] outline-none border-[1px] border-gray-300 rounded-full px-6 py-[12px] focus:border-gray-500"
            placeholder="Name"
          />
          <input
            type="text"
            className="w-[100%] outline-none border-[1px] border-gray-300 rounded-full px-6 py-[12px] focus:border-gray-500"
            placeholder="Username"
          />
        </div>
        <input
          type="text"
          className="w-[100%] outline-none border-[1px] border-gray-300 rounded-full px-6 py-[12px] focus:border-gray-500 mt-4"
          placeholder="Email"
        />
        <div className="relative h-fit mt-4">
          <input
            type="password"
            className="w-[100%] outline-none border-[1px] border-gray-300 rounded-full px-6 py-[12px] focus:border-gray-500 "
            placeholder="Password"
          />
          <div className="absolute h-[100%] top-0 right-0 bg-gray-200 px-2 rounded-tr-[2rem] rounded-br-[2rem]">
            show
          </div>
        </div>
        <button className="bg-slate-600 hover:bg-slate-700 transition mt-8 w-full py-2 hover:tracking-[0.25rem] rounded-md rounded-tl-[3rem] rounded-br-[3rem] text-white">
          Sign Up
        </button>
        <p className="text-center my-4 mt-6">
          Already have an account?{" "}
          <span className="cursor-pointer">Log in!</span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

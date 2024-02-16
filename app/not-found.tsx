import React from "react";
import AnimatedBackground from "./components/AnimatedBackground";

const notFound = () => {
  return (
    <div className="flex flex-col w-[100%] h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[12rem] font-[900] text-gray-600/[80%] leading-[13rem] text-shadow-lg shadow-gray-500/50">
          404
        </h1>
        <p className="mt-4 text-gray-600">Looks like you got lost...</p>
      </div>
      <AnimatedBackground value={200} />
    </div>
  );
};

export default notFound;

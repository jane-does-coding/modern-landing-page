import Image from "next/image";
import React from "react";

const More = () => {
  return (
    <div>
      <div className="h-[300vh] w-[100%] flex flex-col mt-36">
        <div className="sticky top-[10rem] w-[100%] flex items-center justify-center">
          <Image
            src={"/img1.jpg"}
            width={450}
            height={400}
            alt="image"
            className="rounded-lg"
          />
        </div>
        <div className="sticky top-[1rem] w-[20vw] ml-[70vw] h-screen flex flex-col items-left justify-center">
          <h2 className="font-semibold text-lg">Lorem, ipsum.</h2>
          <p className="text-sm mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            temporibus provident dolores. Consequatur, eaque. Repellendus aut
            quisquam accusantium! Impedit, saepe!
          </p>
        </div>
        <div className="sticky top-[1rem] w-[20vw] ml-[10vw] h-screen flex flex-col items-left justify-center">
          <h2 className="font-semibold text-lg">Lorem, ipsum.</h2>
          <p className="text-sm mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            temporibus provident dolores. Consequatur, eaque. Repellendus aut
            quisquam accusantium! Impedit, saepe!
          </p>
        </div>
      </div>
    </div>
  );
};

export default More;

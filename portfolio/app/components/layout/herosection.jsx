import React from "react";
import Button from "../common/button";
import Image from "next/image";
import heroImage from "../../assets/heroImage.png";

const Herosection = () => {
  return (
    <div className="w-full h-auto flex flex-col-reverse md:flex-row">
      {/* Left Section */}
      <div className="h-full w-full md:w-[60%] flex flex-col items-center md:items-start md:flex-col md:justify-center space-y-6 p-6">
        <p className="text-[20px] font-semibold">Bring design to life</p>
        <p className="text-[68px] font-semibold text-center md:text-left">ARPIT BANSAL</p>
        <p className="text-[20px] font-semibold text-center md:text-left">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
        <div>
          <Button text="Contact" link="#" />
        </div>
      </div>

      {/* Right Section */}
      <div className="h-full w-full md:w-[40%] flex justify-center items-center">
        <Image src={heroImage} alt="heroImage" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Herosection;

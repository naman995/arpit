import React from 'react';
import Button from '../common/button';
import Image from 'next/image';
import heroImage from '../../assets/heroImage.png';

const Herosection = () => {
  return (
    <div className="h-[400px] w-full flex">
      {/* Left Section */}
      <div className="h-full w-[60%] flex flex-col justify-center space-y-6 p-6">
        <p className="text-[20px] font-semibold">Bring design to live</p>
        <p className="text-[68px] font-semibold">ARPIT BANSAL</p>
        <p className="text-[20px] font-semibold">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
        <div>
          <Button text="Contact" link="#" />
        </div>
      </div>

      {/* Right Section */}
      <div className="h-full w-[40%]">
        <Image src={heroImage} alt='heroImage'/>
      </div>
    </div>
  );
};

export default Herosection;


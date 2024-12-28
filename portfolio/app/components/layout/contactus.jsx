import React from "react";
import Form from "../common/form";

const Contactus = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-20 px-5 md:px-10">
      <div className="lg:w-1/2 w-full px-0 lg:px-20 mb-8 lg:mb-0">
        <p className="text-[32px] font-semibold">Let's work together</p>
        <p className="text-[17px] font-semibold text-gray-600 mt-4">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </p>
      </div>
      <div className="lg:ml-20 lg:w-1/2 w-full">
        <Form />
      </div>
    </div>
  );
};

export default Contactus;

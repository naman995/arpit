import React from "react";
import Image from "next/image";
import Rectangle from "../../assets/Rectangle.png";
import Skills from "../../assets/Skills.png";
import Skillsss from "../../assets/Skillsss.png";

const Quality = () => {
  // Define the images array with headings and content
  const images = [
    {
      src: Rectangle,
      alt: "Product Design",
      heading: "Product Design",
      content:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      src: Skills,
      alt: "Visual Design",
      heading: "Visual Design",
      content:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
    {
      src: Skillsss,
      alt: "Art Direction",
      heading: "Art Direction",
      content:
        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    },
  ];

  return (
    <div className="mt-10 sm:mt-20 lg:mt-20">
      {/* Image rendering using map */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center px-8"
          >
            {/* Image */}
            <div className="flex justify-center items-center mb-4">
              <Image
                src={image.src}
                alt={image.alt}
                width={124} // Adjust width for better responsiveness
                height={124} // Adjust height for better responsiveness
                layout="intrinsic"
              />
            </div>

            {/* Heading and Content */}
            <div className="flex flex-col items-center justify-center text-center px-4">
              <p className="text-[27px] sm:text-2xl font-semibold mb-2">
                {image.heading}
              </p>
              <p className="text-[17px] font-semibold sm:text-base text-gray-600">
                {image.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quality;

import React from "react";
import Image from "next/image";
import work from "../../assets/latest_work/Image.png";

const data = [
  {
    title: "Social Media",
    description: "UI, Art direction",
    imageSrc: work,
  },
  {
    title: "2D Illustrations",
    description: "UI, Art direction",
    imageSrc: work,
  },
  {
    title: "AI Generated Images",
    description: "UI, Art direction",
    imageSrc: work,
  },
  {
    title: "Social Media",
    description: "UI, Art direction",
    imageSrc: work,
  },
  {
    title: "2D Illustrations",
    description: "UI, Art direction",
    imageSrc: work,
  },
  {
    title: "AI Generated Images",
    description: "UI, Art direction",
    imageSrc: work,
  }
  // Add more data objects as needed
];

const Latestwork = () => {
  return (
    <div className=" py-10">
      <p className="text-[32px] font-bold mt-10 text-center">Latest Work</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden "
          >
            <Image
              src={item.imageSrc}
              alt={item.title}
              className="object-cover mx-auto"
              height={300}
              width={300}
            />
            <div className="p-4 ml-10">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestwork;

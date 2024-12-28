import React from "react";

const Button = ({ text, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 bg-black w-[211px] h-[78px] text-[20px] text-white rounded ">
        {text}
      </button>
    </a>
  );
};

export default Button;

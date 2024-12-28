"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility on mobile
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full bg-white h-20 flex items-center justify-between text-black text-[17px] font-bold">
      {/* Logo */}
      <div className="p-5">
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>

      {/* NavItems */}
      <div className="hidden md:flex">
        <ul className="flex space-x-4 mr-5">
          <li className="p-4">About</li>
          <li className="p-4">Work</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute top-20 left-0 w-full bg-white p-5 shadow-md`}
      >
        <ul className="space-y-4">
          <li className="p-4">About</li>
          <li className="p-4">Work</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="w-full bg-white h-20 flex space-between items-center justify-between text-black text-[17px] font-bold">
      {/* Logo */}
      <div className=" p-5">
        <Image  src={logo} alt="logo" width={50} height={50} />
      </div>
      {/* NavItems */}
      <div className="">
        <ul className="flex space-x-4 mr-5">
          <li className="p-4">About</li>
          <li className="p-4">Work</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
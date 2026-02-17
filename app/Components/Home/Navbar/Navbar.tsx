"use client";
import { sidebarLinks } from "@/Constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuBell, LuNetwork, LuSearch } from "react-icons/lu";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  return (
    <>
      {/* Top navbar */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-white z-50 shadow flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center bg-cyan-800 rounded-full">
            <LuNetwork className="w-6 h-6 text-white" />
          </div>
          <h1 className="hidden lg:block text-xl font-bold text-gray-500">
            SureTrust
          </h1>
        </div>
        <div className="hidden md:flex items-center ml-80">
           {/* Search */}
       <div className="relative w-64">
        <input
        type="text"
        placeholder="Search..."
        className="w-full pl-9 pr-5 py-2 shadow rounded-lg"
    />
    <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
  </div>

  {/* Push notification to the right */}
  <div className="relative ml-[700]">
    <LuBell className="w-6 h-6 text-gray-500 cursor-pointer" />
    <span className="absolute top-0 right-1 w-2 h-2  bg-red-500 rounded-full ring-1 ring-white"></span>
  </div>
</div>

        {/* Right icons / burger */}
        <div className="flex items-center gap-4">
              <div className="w-px h-7 bg-gray-400 hidden lg:flex "></div>
          <Image
            src="/images/Mask-Group.png"
            alt="profile"
            width={36}
            height={36}
            className="hidden lg:block"
          />
          
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer lg:hidden"
          />
        </div>
      </nav>

      {/* Desktop Sidebar inside Navbar */}
      <aside className="hidden lg:flex flex-col fixed top-16 left-0  w-40 z-40 p-4">
    
        {/* Links */}
        <nav className="flex flex-col mt-10 space-y-6">
          {sidebarLinks.map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex items-center gap-3 text-[#718096] hover:bg-blue-500 hover:text-white rounded-xl py-2 px-2 transition"
            >
              {link.imgURL && (
                <Image src={link.imgURL} alt={link.label} width={20} height={20} />
              )}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;

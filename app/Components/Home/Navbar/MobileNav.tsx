"use client"
import { sidebarLinks } from "@/Constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-blue-800 z-50
        transform transition-transform duration-300
        ${showNav ? "translate-x-0" : "translate-x-full"}`}
      >
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 w-6 h-6 text-white cursor-pointer"
        />

        <div className="mt-16 space-y-6 px-6">
          {sidebarLinks.map((link) => (
            <Link key={link.route} href={link.route} onClick={closeNav}>
              <p className="text-white text-lg border-b pb-2">{link.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileNav;

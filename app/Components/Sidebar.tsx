import { sidebarLinks } from "@/Constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuNetwork } from "react-icons/lu";

const Sidebar = () => {
  return (
    <aside className="hidden lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-64 bg-white border-r z-40 p-6">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-10">
        <div className="w-10 h-10 flex items-center justify-center bg-cyan-800 rounded-full">
          <LuNetwork className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-500">SureTrust</h1>
      </div>

      {/* Links */}
      <nav className="space-y-4">
        {sidebarLinks.map((link) => (
          <Link
            key={link.route}
            href={link.route}
            className="flex items-center gap-3 text-[#718096] hover:bg-blue-500 hover:text-white rounded-xl py-2 px-3 transition"
          >
            {link.imgURL && (
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
              />
            )}
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

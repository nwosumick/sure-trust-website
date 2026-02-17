"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import Sidebar from "@/Components/Sidebar";


type Props = {
  children: React.ReactNode;
};

const ResponsiveNav = ({ children }: Props) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Navbar openNav={() => setShowNav(true)} />
      <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />
      <Sidebar />

      <main className="pt-20 lg:ml-64 px-4">
        {children}
      </main>
    </>
  );
};

export default ResponsiveNav;

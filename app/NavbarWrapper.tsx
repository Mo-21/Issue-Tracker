"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();
  const showNavbar = pathname !== "/registration";
  return <>{showNavbar && <Navbar />}</>;
};

export default NavbarWrapper;

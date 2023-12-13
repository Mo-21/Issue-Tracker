"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgSearchFound } from "react-icons/cg";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];
  return (
    <nav className="flex space-x-9 border-b px-5 h-14 items-center">
      <Link href="/">
        <CgSearchFound className="w-8 h-8" />
      </Link>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <Link
            className={classNames({
              "text-green-500": currentPath === link.href,
              "text-black": currentPath !== link.href,
              "hover:text-zinc-600 transition-colors text-lg font-bold": true,
            })}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

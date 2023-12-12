import Link from "next/link";
import React from "react";
import { CgSearchFound } from "react-icons/cg";

const Navbar = () => {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex space-x-9 border-b px-5 h-14 items-center">
      <Link href="/">
        <CgSearchFound className="w-8 h-8" />
      </Link>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <Link
            className="hover:text-zinc-600 transition-colors text-lg"
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

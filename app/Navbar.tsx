"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgSearchFound } from "react-icons/cg";
import classNames from "classnames";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];

  const { status, data: session } = useSession();

  return (
    <nav className="flex space-x-9 border-b px-5 h-14 items-center">
      <Link href="/">
        <CgSearchFound className="w-8 h-8" />
      </Link>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-green-500": currentPath === link.href,
                "text-black": currentPath !== link.href,
                "hover:text-zinc-600 transition-colors text-lg font-bold": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {status === "authenticated" && (
        <Link href="/api/auth/signout">Logout</Link>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;

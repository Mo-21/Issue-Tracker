"use client";
import Link from "next/link";
import "react-loading-skeleton/dist/skeleton.css";
import { usePathname } from "next/navigation";
import React from "react";
import { CgSearchFound } from "react-icons/cg";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Box, Text, DropdownMenu, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import defaultAvatar from "@/public/default.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="border-b px-5 py-5">
      <Flex align="center" justify="between">
        <Flex gap="4">
          <NavbarLinks />
        </Flex>
        <Box>
          <Dropdown />
        </Box>
      </Flex>
    </nav>
  );
};

const Dropdown = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Skeleton width="2rem" />;
  if (status === "unauthenticated")
    return (
      <>
        <Link className="nav-link mx-3" href="/api/auth/signin">
          Login
        </Link>
        <Link className="nav-link" href="/registration">
          Sign-up
        </Link>
      </>
    );

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Image
          src={session?.user?.image! ? session?.user?.image! : defaultAvatar}
          alt="avatar"
          className="w-9 border rounded-full hover:cursor-pointer max-h-10"
          referrerPolicy="no-referrer"
          width={36}
          height={36}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>
          <Text>{session!.user?.name}</Text>
        </DropdownMenu.Label>
        <DropdownMenu.Label>
          <Text>{session!.user?.email}</Text>
        </DropdownMenu.Label>
        <DropdownMenu.Item>
          <Link href="/api/auth/signout">Logout</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

const NavbarLinks = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];

  return (
    <>
      <Link href="/">
        <CgSearchFound className="w-8 h-8" />
      </Link>
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "nav-link": true,
                "!text-green-500": currentPath === link.href,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;

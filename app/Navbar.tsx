"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CgSearchFound } from "react-icons/cg";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Avatar, Box, Text, DropdownMenu, Flex } from "@radix-ui/themes";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues/list", label: "Issues" },
  ];

  const { status, data: session } = useSession();

  return (
    <nav className="border-b px-5 py-5">
      <Flex align="center" justify="between">
        <Flex gap="4">
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
                    "hover:text-zinc-600 transition-colors text-lg font-bold":
                      true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>
        <Box>
          {status === "authenticated" && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Avatar
                  size="3"
                  radius="full"
                  src={session.user?.image!}
                  fallback="?"
                  className="hover:cursor-pointer"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Label>
                  <Text>{session.user?.name}</Text>
                </DropdownMenu.Label>
                <DropdownMenu.Label>
                  <Text>{session.user?.email}</Text>
                </DropdownMenu.Label>
                <DropdownMenu.Item>
                  <Link href="/api/auth/signout">Logout</Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          )}
          {status === "unauthenticated" && (
            <Link
              className="hover:text-zinc-600 transition-colors text-lg font-bold"
              href="/api/auth/signin"
            >
              Login
            </Link>
          )}
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;

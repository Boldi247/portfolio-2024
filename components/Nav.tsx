"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkDefinition {
  name: string;
  path: string;
}

const links: LinkDefinition[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link href={link.path}>{link.name}</Link>
      ))}
    </nav>
  );
};

export default Nav;

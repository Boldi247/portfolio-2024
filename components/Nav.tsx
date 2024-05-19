"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface LinkDefinition {
  name: string;
  path: string;
}

export const pageLinks: LinkDefinition[] = [
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
      {pageLinks.map((link, id) => (
        <Link
          href={link.path}
          key={id}
          className={`${
            link.path === pathName && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
